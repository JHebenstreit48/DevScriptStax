import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Forms = () => {
  const markdownFilePath =
    'FrontEndNotes/HTMLNotes/HTMLBasics/HTMLForms';

  return (
    <>
      <PageLayout>
        <Header text="HTML Forms" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default Forms;
