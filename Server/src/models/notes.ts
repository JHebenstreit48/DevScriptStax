import mongoose, { Schema, Document, Types } from "mongoose";

// Interface for a Note document
export interface INote extends Document {
  _id: Types.ObjectId;
  title: string;
  category?: string;
  content: string;
  path: string; // ✅ NEW: logical path used in routing
}

// Define the schema
const noteSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  title: { type: String, required: true },
  category: { type: String, required: false },
  content: { type: String, required: true },
  path: { type: String, required: true, unique: true } // ✅ NEW: required and unique
});

// Export model
const NoteModel = mongoose.model<INote>("Note", noteSchema);

export default NoteModel;
