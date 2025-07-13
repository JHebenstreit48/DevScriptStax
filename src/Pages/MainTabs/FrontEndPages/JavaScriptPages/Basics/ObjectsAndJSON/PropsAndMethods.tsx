import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';
import PageLayout from '@/Components/NavigationUI/PageLayout';

const PropsAndMethods = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/ObjectsAndJSON/PropsAndMethods';

  return (
    <>
      <PageLayout>
        <Header text="Properties and Methods" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default PropsAndMethods;
