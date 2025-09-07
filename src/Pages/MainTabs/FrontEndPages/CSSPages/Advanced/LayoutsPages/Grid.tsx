import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Grid = () => {
  const markdownFilePath = 'FrontEndNotes/CSSNotes/Basics/Advanced/LayoutsNotes/Grid';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Layouts - Grid" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Grid;