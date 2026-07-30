import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GridSystem = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Layout/Grid';

  return (
    <>
      <PageLayout>
        <PageTitle title="Grid System" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GridSystem;
