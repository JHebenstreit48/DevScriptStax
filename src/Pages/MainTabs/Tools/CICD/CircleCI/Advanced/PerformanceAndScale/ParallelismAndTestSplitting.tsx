import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ParallelismAndTestSplitting = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/PerformanceAndScale/ParallelismAndTestSplitting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Parallelism & Test Splitting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParallelismAndTestSplitting;
