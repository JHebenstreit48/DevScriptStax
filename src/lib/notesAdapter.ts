export type NoteMeta = {
    siteId: string;
    fullPath: string;   // "FrontEnd/Angular/Basics/Fundamentals/Introduction"
    title: string;
    tags: string[];
  };
  
  export type NoteDoc = NoteMeta & {
    bodyHtml: string;
    status?: "published" | "draft";
  };
  
  // Contract any page can use
  export interface NotesAdapter {
    list(prefix?: string): Promise<NoteMeta[]>;
    getByFullPath(fullPath: string): Promise<NoteDoc>;
  }  