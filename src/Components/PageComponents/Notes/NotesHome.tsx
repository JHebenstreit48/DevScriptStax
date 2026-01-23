import { lazy, Suspense, useMemo } from "react";
import homeMd from "@/content/Home.md?raw";

const HomeRenderer = lazy(
  () => import("@/Components/PageComponents/Notes/HomeText/HomeRenderer")
);

export default function NotesHome() {
  const content = useMemo(() => homeMd, []);

  return (
    <Suspense fallback={<p>Loading home content...</p>}>
      <HomeRenderer content={content} />
    </Suspense>
  );
}