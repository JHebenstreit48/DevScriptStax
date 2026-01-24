import { useMemo } from "react";
import Header from "@/Components/Shared/Header/Header";
import aboutMd from "@/content/About.md?raw";
import HomeRenderer from "@/Components/PageComponents/Notes/HomeText/HomeRenderer";
import "@/scss/Page/Home/Home.scss";

export default function About() {
  const content = useMemo(() => aboutMd, []);

  return (
    <>
      <Header />
      <main className="homePage">
        <div className="siteInfo">
          <HomeRenderer content={content} />
        </div>
      </main>
    </>
  );
}