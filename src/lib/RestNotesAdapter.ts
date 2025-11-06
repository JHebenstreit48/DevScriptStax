import type { NotesAdapter, NoteMeta, NoteDoc } from "./notesAdapter";

const API = import.meta.env.VITE_API_BASE_URL;

export class RestNotesAdapter implements NotesAdapter {
  async list(prefix?: string): Promise<NoteMeta[]> {
    const url = new URL(`${API}/notes`);
    if (prefix) url.searchParams.set("prefix", prefix);
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load notes index");
    return res.json();
  }

  async getByFullPath(fullPath: string): Promise<NoteDoc> {
    const res = await fetch(`${API}/notes/${encodeURIComponent(fullPath)}`);
    if (!res.ok) throw new Error("Note not found");
    return res.json();
  }
}