import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSON = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/ObjectsAndJSON/JSON';

  return (
    <>
      <PageLayout>
        <Header text="JSON" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default JSON;
