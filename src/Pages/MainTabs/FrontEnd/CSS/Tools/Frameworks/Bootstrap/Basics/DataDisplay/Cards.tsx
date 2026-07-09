import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Cards = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/DataDisplay/Cards';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Cards;
