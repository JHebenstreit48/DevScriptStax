import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ScopeAndContext = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/CoreConcepts/ScopeAndContext';

  return (
    <>
      <PageLayout>
        <Header text="Scope/Context" size="md"  />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default ScopeAndContext;
