import AboutContent from "@/Components/homeAndAbout/aboutContent";
import "@/scss/shared/homeAndAbout/index.scss";

export default function About() {
  return (
    <>
      <main className="homePage">
        <div className="siteInfo">
          <AboutContent />
        </div>
      </main>
    </>
  );
}