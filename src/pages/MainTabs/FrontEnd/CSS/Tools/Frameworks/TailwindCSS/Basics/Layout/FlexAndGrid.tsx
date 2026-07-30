import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FlexAndGrid = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Layout/FlexAndGrid';

  return (
    <>
      <PageLayout>
        <PageTitle title="Flex & Grid" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FlexAndGrid;
