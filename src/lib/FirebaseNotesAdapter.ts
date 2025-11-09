import type { NotesAdapter, NoteMeta, NoteDoc } from "@/lib/notesAdapter";
import { dbNotes, SITE_ID } from "@/Firebase/client";
import {
  collection, getDocs, query, where, orderBy, limit, FirestoreDataConverter, DocumentData
} from "firebase/firestore";

type FirestoreNote = {
  siteId: string;
  path: string[];
  slug: string;
  fullPath: string;
  title: string;
  tags?: string[];
  bodyMd?: string;
  bodyHtml?: string;
  status?: "published" | "draft";
};

const noteConverter: FirestoreDataConverter<FirestoreNote> = {
  toFirestore(note: FirestoreNote): DocumentData {
    return note;
  },
  fromFirestore(snapshot): FirestoreNote {
    // TS-safe conversion with explicit shape
    const d = snapshot.data() as DocumentData;
    return {
      siteId: String(d.siteId),
      path: Array.isArray(d.path) ? d.path.map(String) : [],
      slug: String(d.slug),
      fullPath: String(d.fullPath),
      title: String(d.title),
      tags: Array.isArray(d.tags) ? d.tags.map(String) : [],
      bodyMd: typeof d.bodyMd === "string" ? d.bodyMd : undefined,
      bodyHtml: typeof d.bodyHtml === "string" ? d.bodyHtml : undefined,
      status: d.status === "draft" ? "draft" : "published"
    };
  }
};

export class FirebaseNotesAdapter implements NotesAdapter {
  async list(prefix?: string): Promise<NoteMeta[]> {
    const col = collection(dbNotes, "posts").withConverter(noteConverter);

    // If you want folder-based lists, we filter by fullPath prefix.
    const q = prefix
      ? query(
          col,
          where("siteId","==",SITE_ID),
          where("fullPath", ">=", prefix),
          where("fullPath", "<", `${prefix}\uf8ff`),
          orderBy("fullPath"),
          limit(1000)
        )
      : query(
          col,
          where("siteId","==",SITE_ID),
          orderBy("fullPath"),
          limit(500)
        );

    const snap = await getDocs(q);
    return snap.docs.map((d) => {
      const n = d.data();
      const meta: NoteMeta = {
        siteId: n.siteId,
        fullPath: n.fullPath,
        title: n.title,
        tags: n.tags ?? []
      };
      return meta;
    });
  }

  async getByFullPath(fullPath: string): Promise<NoteDoc> {
    const col = collection(dbNotes, "posts").withConverter(noteConverter);
    const q = query(col,
      where("siteId","==",SITE_ID),
      where("fullPath","==",fullPath),
      limit(1)
    );
    const snap = await getDocs(q);
    if (snap.empty) throw new Error("Note not found");
    const n = snap.docs[0].data();

    // We return NoteDoc.bodyHtml but your pipeline wants Markdown.
    // So we map it to NoteDoc with bodyHtml, and the fetchMarkdown() wrapper will return n.bodyMd.
    const doc: NoteDoc = {
      siteId: n.siteId,
      fullPath: n.fullPath,
      title: n.title,
      tags: n.tags ?? [],
      bodyHtml: n.bodyHtml ?? ""  // unused by your current renderer
    };
    // We’ll expose n.bodyMd via the fetchMarkdown() wrapper.
    // (Keeping NoteDoc shape unchanged to satisfy your interface.)
    return doc;
  }
}