import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CodeSplitting = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Advanced/PerfAndCodeSplit/CodeSplitting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Code Splitting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodeSplitting;
