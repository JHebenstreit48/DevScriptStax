import { dbNotes, SITE_ID } from '@/firebase/client';
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import type { NoteUpdateInfo, FirestoreUpdateDoc } from "@/types/notes/adapter";

const toFullPath = (filePath: string): string => {
  let fp = filePath.replace(/\\/g, "/");
  if (fp.toLowerCase().endsWith(".md")) fp = fp.slice(0, -3);
  if (fp.startsWith("/")) fp = fp.slice(1);
  return fp;
};

export async function fetchNoteMeta(filePath: string): Promise<NoteUpdateInfo> {
  const fullPath = toFullPath(filePath);

  const col = collection(dbNotes, "posts");
  const q = query(
    col,
    where("siteId", "==", SITE_ID),
    where("fullPath", "==", fullPath),
    limit(1)
  );

  const snap = await getDocs(q);
  if (snap.empty) return { sourceUpdatedAt: null };

  const data = snap.docs[0].data() as unknown as FirestoreUpdateDoc;

  // Only serve published (mirrors your markdown guard)
  if (data.status && data.status !== "published") return { sourceUpdatedAt: null };

  const ts = data.sourceUpdatedAt;
  const d =
    ts?.toDate?.() instanceof Date
      ? (ts.toDate() as Date)
      : ts instanceof Date
        ? ts
        : null;

  return { sourceUpdatedAt: d };
}