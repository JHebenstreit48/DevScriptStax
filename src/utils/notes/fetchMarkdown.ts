import { dbNotes, SITE_ID } from "@/firebase/client";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import type { FirestoreMarkdownDoc } from "@/types/notes/adapter";

const toFullPath = (filePath: string): string => {
  let fp = filePath.replace(/\\/g, "/");
  if (fp.toLowerCase().endsWith(".md")) fp = fp.slice(0, -3);
  if (fp.startsWith("/")) fp = fp.slice(1);
  return fp;
};

export async function fetchMarkdown(filePath: string): Promise<string> {
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

  const data = snap.docs[0].data() as unknown as FirestoreMarkdownDoc;

  if (data.status && data.status !== "published") {
    throw new Error(`Note is not published: ${fullPath}`);
  }

  const md = typeof data.bodyMd === "string" ? data.bodyMd : "";
  if (!md) throw new Error(`Missing bodyMd for: ${fullPath}`);

  return md;
}