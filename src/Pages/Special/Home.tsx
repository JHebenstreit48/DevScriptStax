import { lazy, Suspense } from "react";
import Header from "@/Components/Shared/Header/Header";
import NotesHome from "@/Components/PageComponents/Notes/NotesHome";
import "@/scss/Page/Home/Home.scss";

const QuickDash = lazy(() => import("@/Components/Home/QuickDash"));

export default function Home() {
  return (
    <>
      <Header />
      <main className="homePage">
        <div className="siteInfo">
          <NotesHome />
          <Suspense fallback={null}>
            <QuickDash />
          </Suspense>
        </div>
      </main>
    </>
  );
}