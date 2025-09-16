import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTile from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SyntaxStructure = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/CoreConcepts/SyntaxStructure';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTile title="JavaScript Core Concepts - Syntax & Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyntaxStructure;