import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Cards = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/DataDisplay/Cards';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Cards;
