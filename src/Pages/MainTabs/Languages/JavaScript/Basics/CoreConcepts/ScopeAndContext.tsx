import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ScopeAndContext = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/CoreConcepts/ScopeAndContext';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Core Concepts - Scope and Context" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ScopeAndContext;