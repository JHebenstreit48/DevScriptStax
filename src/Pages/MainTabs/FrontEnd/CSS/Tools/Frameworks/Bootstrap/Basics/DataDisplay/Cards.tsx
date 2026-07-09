import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
