import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GridSystem = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Layout/GridSystem';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Grid System" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GridSystem;
