import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CodeSplitting = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/ArchitectureAndPatterns/CodeSplitting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Code Splitting (Lazy Reducers)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodeSplitting;
