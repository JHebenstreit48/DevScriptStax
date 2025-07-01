import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';


const ObjectsBasics = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/ObjectsAndJSON/Basics';

  return (
    <>
    <PageLayout>
    <Header text="Objects Intro" />
      <Notes
        filePath={markdownFilePath}
        
      />
    </PageLayout>
    </>
  );
};

export default ObjectsBasics;
