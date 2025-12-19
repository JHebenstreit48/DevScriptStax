import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CardsAndNav = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Components/CardsAndNav';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cards & Nav" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CardsAndNav;
