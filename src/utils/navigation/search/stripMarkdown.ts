export function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")        // code blocks
    .replace(/`[^`]*`/g, " ")               // inline code
    .replace(/!\[.*?\]\(.*?\)/g, " ")       // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links -> keep label text
    .replace(/^#{1,6}\s+/gm, "")            // heading marks
    .replace(/[*_~>#-]/g, " ")              // md punctuation
    .replace(/\|/g, " ")                    // table pipes
    .replace(/\s+/g, " ")
    .trim();
}