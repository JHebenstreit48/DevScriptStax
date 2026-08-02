export type NoteMeta = {
  siteId: string;
  fullPath: string;
  title: string;
  tags: string[];
};

export type NoteDoc = NoteMeta & {
  bodyHtml: string;
  status?: 'published' | 'draft';
};

// Contract any page can use
export interface NotesAdapter {
  list(prefix?: string): Promise<NoteMeta[]>;
  getByFullPath(fullPath: string): Promise<NoteDoc>;
}

export type NoteUpdateInfo = {
  sourceUpdatedAt: Date | null;
};

export type FirestoreMarkdownDoc = {
  siteId: string;
  fullPath: string;
  bodyMd?: string;
  status?: 'published' | 'draft';
};

export type FirestoreUpdateDoc = {
  siteId: string;
  fullPath: string;
  sourceUpdatedAt?: any; // Firestore Timestamp
  status?: 'published' | 'draft';
};