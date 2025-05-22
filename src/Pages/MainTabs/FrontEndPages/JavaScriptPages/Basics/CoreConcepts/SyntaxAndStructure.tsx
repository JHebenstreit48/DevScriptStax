import Notes from '@/Components/PageComponents/Notes/NotesRender';
import Header from '@/Components/PageComponents/Header';

const SyntaxStructure = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/SyntaxStructure';

  return (
    <>
      <Header text="JavaScript Syntax And Structure" />
      <Notes
        filePath={markdownFilePath}
        markdownContent="markdownContent"
      />
    </>
  );
};

export default SyntaxStructure;
