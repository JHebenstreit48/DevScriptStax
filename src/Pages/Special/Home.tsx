import Header from '@/Components/Shared/Header/Header';
import NotesHome from '@/Components/PageComponents/Notes/NotesHome'; // <-- new file
import '@/SCSS/PageStyles/HomeStyles/Home.scss';

const Home = () => {
  return (
    <>
      <Header />
      <div className="siteInfo">
        <NotesHome />
      </div>
    </>
  );
};

export default Home;