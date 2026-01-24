import { useMemo } from "react";
import homeMd from "@/content/Home.md?raw";
import HomeRenderer from "@/Components/PageComponents/Notes/HomeText/HomeRenderer";

export default function NotesHome() {
  const content = useMemo(() => homeMd, []);
  return <HomeRenderer content={content} />;
}