import path from "node:path";
import fs from "node:fs";

export function scanRoutesSectionGeneratedFile(sectionFolder: string): string {
  // frontEnd.generated.tsx naming (camel-ish)
  const fileBase = sectionFolder.charAt(0).toLowerCase() + sectionFolder.slice(1);
  return path.join(process.cwd(), "src", "routes", "Sections", `${fileBase}.generated.tsx`);
}

export function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}