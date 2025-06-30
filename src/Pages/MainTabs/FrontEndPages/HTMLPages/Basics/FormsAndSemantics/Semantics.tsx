import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const HTMLSemantics = () => {
  const markdownFilePath =
    'FrontEndNotes/HTMLNotes/HTMLBasics/HTMLSemantics';

  return (
    <>
      <PageLayout>
        <Header text="HTML Semantics" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default HTMLSemantics;
