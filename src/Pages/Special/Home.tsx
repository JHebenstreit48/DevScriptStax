import { lazy, Suspense } from "react";
import Header from "@/Components/Shared/Header/Header";
import HomeContent from "@/Components/HomeAndAbout/homeContent";
import "@/scss/Shared/HomeAndAbout/index.scss";

const QuickDash = lazy(() => import("@/Components/HomeAndAbout/QuickDash"));

export default function Home() {
  return (
    <>
      <Header />
      <main className="homePage">
        <div className="siteInfo">
          <HomeContent />
          <Suspense fallback={null}>
            <QuickDash />
          </Suspense>
        </div>
      </main>
    </>
  );
}