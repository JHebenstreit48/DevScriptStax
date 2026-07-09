import { lazy, Suspense } from "react";
import HomeContent from "@/Components/HomeAndAbout/homeContent";
import "@/scss/shared/HomeAndAbout/index.scss";

const QuickDash = lazy(() => import("@/Components/HomeAndAbout/QuickDash"));

export default function Home() {
  return (
    <>
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