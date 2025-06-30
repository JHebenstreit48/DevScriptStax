import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const HTMLHistory = () => {
  const markdownFilePath =
    'FrontEndNotes/HTMLNotes/Basics/Fundamentals/History';

  return (
    <>
      <Header text="History" />
      <Notes
        filePath={markdownFilePath}
        markdownContent="markdownContent"
      />
    </>
  );
};

export default HTMLHistory;
