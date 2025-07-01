import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const JSHistory = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/Introduction/History';

  return (
    <>
      <PageLayout>
        <Header text="History" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default JSHistory;
