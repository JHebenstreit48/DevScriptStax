const CONTENT_JSON_URL =
  'https://raw.githubusercontent.com/JHebenstreit48/DevScriptStax-API/main/content.json';

type ExportedNote = {
  fullPath: string;
  title: string;
  category: string;
  bodyMd: string;
};

type ContentJson = Record<string, ExportedNote>;

let cached: ContentJson | null = null;

const toFullPath = (filePath: string): string => {
  let fp = filePath.replace(/\\/g, '/');
  if (fp.toLowerCase().endsWith('.md')) fp = fp.slice(0, -3);
  if (fp.startsWith('/')) fp = fp.slice(1);
  return fp;
};

async function getContentJson(): Promise<ContentJson> {
  if (cached) return cached;
  const res = await fetch(CONTENT_JSON_URL);
  if (!res.ok) throw new Error(`Failed to fetch content.json: ${res.status}`);
  cached = (await res.json()) as ContentJson;
  return cached;
}

export async function fetchMarkdownFromContentJson(
  filePath: string
): Promise<string> {
  const fullPath = toFullPath(filePath);
  const content = await getContentJson();
  const note = content[fullPath];
  if (!note) throw new Error(`Not found in content.json: ${fullPath}`);
  return note.bodyMd;
}

export async function fetchNoteMetaFromContentJson(
  filePath: string
): Promise<{ sourceUpdatedAt: Date | null }> {
  return { sourceUpdatedAt: null };
}