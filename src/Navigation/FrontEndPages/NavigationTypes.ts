export type Subpage = {
    name: string;
    path?: string;
    subpages?: Subpage[];
  };
  
  export type Page = {
    name: string;
    subpages: Subpage[];
  };
  