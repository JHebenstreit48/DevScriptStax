import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CodeSplitting = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/Bundling/Webpack/Advanced/PerfAndCodeSplit/CodeSplitting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Code Splitting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodeSplitting;
