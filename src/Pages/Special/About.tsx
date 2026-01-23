import { lazy, Suspense, useMemo } from "react";
import Header from "@/Components/Shared/Header/Header";
import aboutMd from "@/content/About.md?raw";
import "@/scss/Page/Home/Home.scss";

const HomeRenderer = lazy(
  () => import("@/Components/PageComponents/Notes/HomeText/HomeRenderer")
);

export default function About() {
  const content = useMemo(() => aboutMd, []);

  return (
    <>
      <Header />
      <main className="homePage">
        <div className="siteInfo">
          <Suspense fallback={<p>Loading about content...</p>}>
            <HomeRenderer content={content} />
          </Suspense>
        </div>
      </main>
    </>
  );
}