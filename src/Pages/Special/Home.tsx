import Header from '@/Components/Shared/Header';
import NotesHome from '@/Components/PageComponents/Notes/NotesHome'; // <-- new file
import '@/SCSS/PageStyles/Home.scss';

const Home = () => {
  return (
    <>
      <Header text="NetNotes" />
      <div className="siteInfo">
        <NotesHome />
      </div>
    </>
  );
};

export default Home;