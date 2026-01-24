import Header from "@/Components/Shared/Header/Header";
import QuickDash from "@/Components/HomeAndAbout/QuickDash";
import HomeContent from "@/Components/HomeAndAbout/homeContent";
import "@/scss/Page/Home/Home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className="homePage">
        <div className="siteInfo">
          <HomeContent />
          <QuickDash />
        </div>
      </main>
    </>
  );
}