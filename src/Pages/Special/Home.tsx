import Header from "@/Components/Shared/Header/Header";
import NotesHome from "@/Components/PageComponents/Notes/NotesHome";
import QuickDash from "@/Components/Home/QuickDash";
import "@/SCSS/PageStyles/HomeStyles/Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className="siteInfo">
        <NotesHome />
        <QuickDash />
      </div>
    </>
  );
};

export default Home;