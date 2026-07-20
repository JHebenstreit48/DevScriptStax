import { dbNotes, SITE_ID } from "@/Firebase/client";
import { collection, getDocs, query, where } from "firebase/firestore";

export interface NoteBody {
  fullPath: string;
  bodyMd: string;
}

export async function fetchAllNotesBodies(): Promise<NoteBody[]> {
  const col = collection(dbNotes, "posts");
  const q = query(
    col,
    where("siteId", "==", SITE_ID),
    where("status", "==", "published")
  );

  const snap = await getDocs(q);

  return snap.docs
    .map((doc) => {
      const data = doc.data() as { fullPath?: string; bodyMd?: string };
      return {
        fullPath: data.fullPath ?? "",
        bodyMd: typeof data.bodyMd === "string" ? data.bodyMd : "",
      };
    })
    .filter((n) => n.fullPath && n.bodyMd);
}