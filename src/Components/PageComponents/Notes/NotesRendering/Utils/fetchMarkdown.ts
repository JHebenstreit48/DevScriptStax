const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
const isLocal = API_BASE_URL.includes('localhost') || API_BASE_URL.startsWith('/');

export const fetchMarkdown = async (filePath: string): Promise<string> => {
  const fullUrl = isLocal
    ? `${API_BASE_URL}/Notes/${filePath}`
    : `${API_BASE_URL}/api/Notes/${filePath}`;

  const response = await fetch(fullUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch Markdown content: ${filePath}`);
  }

  return response.text();
};
