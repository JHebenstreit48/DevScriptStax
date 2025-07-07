import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Introduction = () => {
  const markdownFilePath =
    'FrontEndNotes/AngularNotes/Testing/Unit/Introduction';

  return (
    <>
      <Header text="Introduction" />
      <Notes
        filePath={markdownFilePath}
      />
    </>
  );
};

export default Introduction;
