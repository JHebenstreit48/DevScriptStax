import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CardsAndNav = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Components/CardsAndNav';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cards & Nav" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CardsAndNav;
