import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FlexAndGrid = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Layout/FlexAndGrid';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Flex & Grid" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FlexAndGrid;
