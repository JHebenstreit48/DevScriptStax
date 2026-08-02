import { FirebaseNotesAdapter } from "@/lib/firebaseNotes/FirebaseNotesAdapter";
import type { NotesAdapter } from "@/types/notes/adapter";

const adapter: NotesAdapter = new FirebaseNotesAdapter();

export default adapter;