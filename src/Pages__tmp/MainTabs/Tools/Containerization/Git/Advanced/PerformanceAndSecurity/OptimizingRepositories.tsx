import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
