import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRender';

const ReactIntro = () => {
  const markdownFilePath =
    'FrontEndNotes/ReactNotes/Basics/Fundamentals/Introduction';

  return (
    <>
      <PageLayout>
        <Header text="Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReactIntro;