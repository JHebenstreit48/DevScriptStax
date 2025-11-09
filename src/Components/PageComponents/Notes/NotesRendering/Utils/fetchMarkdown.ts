import { dbNotes, SITE_ID } from "@/Firebase/client";
import {
  collection, getDocs, limit, query, where
} from "firebase/firestore";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const BACKEND = (import.meta.env.VITE_NOTES_BACKEND || "rest").toLowerCase();

// Utility: Removes accidental double slashes except after protocol
const cleanUrl = (url: string): string => url.replace(/([^:]\/)\/+/g, "$1");

// Normalize repo-style path → Firestore fullPath (strip .md, trim leading slash)
const toFullPath = (filePath: string): string => {
  let fp = filePath.replace(/\\/g, "/");
  if (fp.toLowerCase().endsWith(".md")) fp = fp.slice(0, -3);
  if (fp.startsWith("/")) fp = fp.slice(1);
  return fp;
};

type FirestoreNoteDoc = {
  siteId: string;
  fullPath: string;
  bodyMd?: string;
  status?: "published" | "draft";
};

async function fetchMarkdownFromFirestore(filePath: string): Promise<string> {
  const fullPath = toFullPath(filePath);
  const col = collection(dbNotes, "posts");
  const q = query(
    col,
    where("siteId", "==", SITE_ID),
    where("fullPath", "==", fullPath),
    limit(1)
  );
  const snap = await getDocs(q);
  if (snap.empty) throw new Error(`Note not found: ${fullPath}`);

  const data = snap.docs[0].data() as unknown as FirestoreNoteDoc;
  // Guard: only serve published
  if (data.status && data.status !== "published") {
    throw new Error(`Note is not published: ${fullPath}`);
  }
  const md = typeof data.bodyMd === "string" ? data.bodyMd : "";
  if (!md) throw new Error(`Missing bodyMd for: ${fullPath}`);
  return md;
}

async function fetchMarkdownFromRest(filePath: string): Promise<string> {
  const isLocal = API_BASE_URL.includes("localhost") || API_BASE_URL.startsWith("/");
  const basePath = isLocal
    ? `${API_BASE_URL}/Notes/${filePath}`
    : `${API_BASE_URL}/api/Notes/${filePath}`;
  const fullUrl = cleanUrl(basePath);

  const response = await fetch(fullUrl);
  if (!response.ok) {
    const errorText = await response.text();
    console.error(`❌ Failed fetch for: ${fullUrl}`);
    throw new Error(
      `Failed to fetch Markdown content.\nStatus: ${response.status}\nMessage: ${errorText}`
    );
  }
  return response.text();
}

export const fetchMarkdown = async (filePath: string): Promise<string> => {
  if (BACKEND === "firebase") {
    return fetchMarkdownFromFirestore(filePath);
  }
  return fetchMarkdownFromRest(filePath);
};