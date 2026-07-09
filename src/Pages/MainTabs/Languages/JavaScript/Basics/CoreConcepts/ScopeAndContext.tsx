import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ScopeAndContext = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/CoreConcepts/ScopeAndContext';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Core Concepts - Scope and Context" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ScopeAndContext;