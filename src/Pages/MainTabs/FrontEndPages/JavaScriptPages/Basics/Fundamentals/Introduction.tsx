import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const JSOverview = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/Introduction/Overview';

  return (
    <>
      <PageLayout>
        <Header text="Overview" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default JSOverview;