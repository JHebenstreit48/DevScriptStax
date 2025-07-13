const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

// Utility: Removes accidental double slashes except after protocol
const cleanUrl = (url: string): string => url.replace(/([^:]\/)\/+/g, '$1');

export const fetchMarkdown = async (filePath: string): Promise<string> => {
  const isLocal = API_BASE_URL.includes('localhost') || API_BASE_URL.startsWith('/');

  const basePath = isLocal
    ? `${API_BASE_URL}/Notes/${filePath}`
    : `${API_BASE_URL}/api/Notes/${filePath}`;

  const fullUrl = cleanUrl(basePath);

  try {
    const response = await fetch(fullUrl);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ Failed fetch for: ${fullUrl}`);
      throw new Error(`Failed to fetch Markdown content.\nStatus: ${response.status}\nMessage: ${errorText}`);
    }

    return await response.text();
  } catch (err) {
    console.error(`❌ Error in fetchMarkdown:`, err);
    throw new Error(`Failed to fetch Markdown content: ${filePath}`);
  }
};