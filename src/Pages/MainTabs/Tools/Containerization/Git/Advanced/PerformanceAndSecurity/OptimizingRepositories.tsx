import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OptimizingRepositories = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/PerformanceAndSecurity/OptimizingRepositories';

  return (
    <>
      <PageLayout>
        <PageTitle title="Optimizing Repositories" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OptimizingRepositories;
