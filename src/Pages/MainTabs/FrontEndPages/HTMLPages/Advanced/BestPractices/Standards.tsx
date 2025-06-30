import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Standards = () => {
  const markdownFilePath =
    'FrontEndNotes/HTMLNotes/Advanced/BestPractices/Standards';

  return (
    <>
      <PageLayout>
        <Header text="Code Standards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Standards;
