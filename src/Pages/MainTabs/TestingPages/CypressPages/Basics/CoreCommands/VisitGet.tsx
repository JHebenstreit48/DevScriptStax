import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const VisitGet = () => {
  const markdownFilePath =
    'TestingNotes/EndToEndNotes/CypressNotes/Basics/CoreCommands/VisitGet';

  return (
    <>
      <PageLayout>
        <Header text="Visit/Get" size="md" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default VisitGet;
