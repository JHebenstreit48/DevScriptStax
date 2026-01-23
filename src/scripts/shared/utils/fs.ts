import fs from "node:fs";
import path from "node:path";

export function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

export function exists(filePath: string) {
  return fs.existsSync(filePath);
}

export function readText(filePath: string) {
  return fs.readFileSync(filePath, "utf8");
}

export function writeText(filePath: string, content: string) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf8");
}

export function writeIfChanged(filePath: string, content: string): boolean {
  const prev = exists(filePath) ? readText(filePath) : null;
  if (prev === content) return false;
  writeText(filePath, content);
  return true;
}
