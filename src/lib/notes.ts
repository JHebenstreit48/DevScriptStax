import { FirebaseNotesAdapter } from "./FirebaseNotesAdapter";
import type { NotesAdapter } from "./notesAdapter";

const adapter: NotesAdapter = new FirebaseNotesAdapter();

export default adapter;