import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRender';


const ObjectsBasics = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/ObjectsAndJSON/Basics';

  return (
    <>
    <PageLayout>
    <Header text="Objects Intro" />
      <Notes
        filePath={markdownFilePath}
        markdownContent="markdownContent"
      />
    </PageLayout>
    </>
  );
};

export default ObjectsBasics;
