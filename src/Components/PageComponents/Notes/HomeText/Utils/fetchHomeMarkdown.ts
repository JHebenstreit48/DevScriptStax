export const fetchHomeMarkdown = async (filePath: string): Promise<string> => {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to load markdown: ${response.statusText}`);
      }
      return await response.text();
    } catch (err) {
      console.error(`[Markdown Fetch Error]:`, err);
      return '';
    }
  };