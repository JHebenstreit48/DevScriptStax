import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SyntaxStructure = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/CoreConcepts/SyntaxStructure';

  return (
    <>
      <PageLayout>
        <PageTile title="JavaScript Core Concepts - Syntax & Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyntaxStructure;