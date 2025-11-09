import { RestNotesAdapter } from "./RestNotesAdapter";
import { FirebaseNotesAdapter } from "./FirebaseNotesAdapter";
import type { NotesAdapter } from "./notesAdapter";

const backend = (import.meta.env.VITE_NOTES_BACKEND || "rest").toLowerCase();

let adapter: NotesAdapter;
if (backend === "firebase") {
  adapter = new FirebaseNotesAdapter();
} else {
  adapter = new RestNotesAdapter();
}

export default adapter;