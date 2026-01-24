import { dbNotes, SITE_ID } from "@/Firebase/client";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

// Firebase-only backend
const BACKEND = (import.meta.env.VITE_NOTES_BACKEND || "firebase").toLowerCase();

type FirestoreNoteDoc = {
  siteId: string;
  fullPath: string;
  bodyMd?: string;
  status?: "published" | "draft";
};

// Normalize repo-style path → Firestore fullPath
const toFullPath = (filePath: string): string => {
  let fp = filePath.replace(/\\/g, "/");
  if (fp.toLowerCase().endsWith(".md")) fp = fp.slice(0, -3);
  if (fp.startsWith("/")) fp = fp.slice(1);
  return fp;
};

async function fetchMarkdownFromFirestore(filePath: string): Promise<string> {
  const fullPath = toFullPath(filePath);

  const q = query(
    collection(dbNotes, "posts"),
    where("siteId", "==", SITE_ID),
    where("fullPath", "==", fullPath),
    limit(1)
  );

  const snap = await getDocs(q);
  if (snap.empty) throw new Error(`Note not found: ${fullPath}`);

  const data = snap.docs[0].data() as FirestoreNoteDoc;

  if (data.status && data.status !== "published") {
    throw new Error(`Note is not published: ${fullPath}`);
  }

  if (!data.bodyMd) {
    throw new Error(`Missing bodyMd for: ${fullPath}`);
  }

  return data.bodyMd;
}

export const fetchMarkdown = async (filePath: string): Promise<string> => {
  if (BACKEND !== "firebase") {
    throw new Error(`Unsupported backend: ${BACKEND}`);
  }
  return fetchMarkdownFromFirestore(filePath);
};