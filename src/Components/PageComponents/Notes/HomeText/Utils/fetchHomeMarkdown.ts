export const fetchHomeMarkdown = async (filePath: string): Promise<string> => {
  try {
    const response = await fetch(filePath, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Failed to load markdown: ${response.status} ${response.statusText}`);
    }

    const text = await response.text();

    // Guard against SPA fallback returning your index.html
    const looksLikeHtml =
      /<!doctype html>/i.test(text) ||
      /<html[\s>]/i.test(text) ||
      /src="\/@vite\/client"/i.test(text) ||
      /<div id="root">/i.test(text);

    if (looksLikeHtml) {
      throw new Error(`Fetch returned HTML for "${filePath}" (likely SPA fallback / missing asset).`);
    }

    return text;
  } catch (err) {
    console.error(`[Markdown Fetch Error]:`, err);
    return "";
  }
};