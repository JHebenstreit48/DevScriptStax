import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OptimizingCICDWorkflows = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/PerformanceAndScale/OptimizingCICDWorkflows';

  return (
    <>
      <PageLayout>
        <PageTitle title="Optimizing CI/CD Workflows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OptimizingCICDWorkflows;
