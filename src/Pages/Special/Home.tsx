import Header from "@/Components/Shared/Header/Header";
import NotesHome from "@/Components/PageComponents/Notes/NotesHome";
import QuickDash from "@/Components/Home/QuickDash";
import "@/scss/Page/Home/Home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className="homePage">
        <div className="siteInfo">
          <NotesHome />
          <QuickDash />
        </div>
      </main>
    </>
  );
}