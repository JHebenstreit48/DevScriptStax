import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const SyntaxStructure = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/SyntaxStructure';

  return (
    <>
      <PageLayout>
        <Header text="Syntax" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default SyntaxStructure;
