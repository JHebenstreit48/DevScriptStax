import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const ScopeAndContext = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/ScopeAndContext';

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
