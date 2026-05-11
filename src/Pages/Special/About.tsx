import Header from "@/Components/Shared/Header/Header";
import AboutContent from "@/Components/HomeAndAbout/aboutContent";
import "@/scss/Shared/Home/Home.scss";

export default function About() {
  return (
    <>
      <Header />
      <main className="homePage">
        <div className="siteInfo">
          <AboutContent />
        </div>
      </main>
    </>
  );
}