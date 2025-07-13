import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';
import PageLayout from '@/Components/NavigationUI/PageLayout';

const UtilsAndPatterns = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/ObjectsAndJSON/UtilsAndPatterns';

  return (
    <>
      <PageLayout>
        <Header text="Utilities/Patterns" size="md" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default UtilsAndPatterns;
