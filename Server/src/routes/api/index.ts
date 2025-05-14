import express, { Request, Response, Router } from 'express';
import NotesModel from '@/models/notes';
import mongoose from 'mongoose';

const router: Router = express.Router();

// ============================
//         📓 NOTES ROUTES
// ============================

// 🔁 Get all notes
router.get('/notes', async (_req: Request, res: Response): Promise<void> => {
  try {
    const notes = await NotesModel.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error(`[ERROR] Failed to fetch notes:`, error);
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});

// 🔍 Get note by MongoDB Object ID
router.get(
  '/notes/:id',
  async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'Invalid Object ID format.' });
      return;
    }

    try {
      const note = await NotesModel.findById(id);
      if (!note) {
        res.status(404).json({ error: 'Note not found for the given ID.' });
        return;
      }
      res.json(note);
    } catch (error) {
      console.error(`[ERROR] Failed to fetch note details for ID ${id}:`, error);
      res.status(500).json({ error: 'Failed to fetch note details' });
    }
  }
);

// 🆕 Legacy query path (optional support)
router.get(
  '/notes-by-path',
  async (req: Request, res: Response): Promise<void> => {
    const notePath = req.query.path;

    if (!notePath || typeof notePath !== 'string') {
      res.status(400).json({ error: "Missing or invalid 'path' query parameter" });
      return;
    }

    try {
      const note = await NotesModel.findOne({ path: notePath });
      if (!note) {
        res.status(404).json({ error: 'Note not found for the given path.' });
        return;
      }
      res.json(note);
    } catch (error) {
      console.error(`[ERROR] Failed to fetch note for path ${notePath}:`, error);
      res.status(500).json({ error: 'Failed to fetch note' });
    }
  }
);

// ✅ Wildcard match for full file path
router.get(
  '/notes/:wildPath(*)',
  async (req: Request<{ wildPath: string }>, res: Response): Promise<void> => {
    const rawPath = req.params.wildPath;

    if (!rawPath || typeof rawPath !== 'string') {
      res.status(400).json({ error: 'Invalid note path.' });
      return;
    }

    const parts = rawPath.split('/');
    if (parts.length < 2) {
      res.status(400).json({ error: 'Path must include category and title.' });
      return;
    }

    const title = parts.pop()!;
    const category = parts.join('/');

    try {
      const note = await NotesModel.findOne({ category, title });
      if (!note) {
        console.warn(`[404] No note found at category: "${category}", title: "${title}"`);
        res.status(404).json({ error: 'Note not found.' });
        return;
      }
      res.status(200).send(note.content);
    } catch (error) {
      console.error('[ERROR] Failed to fetch note by path:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  }
);

export default router;
