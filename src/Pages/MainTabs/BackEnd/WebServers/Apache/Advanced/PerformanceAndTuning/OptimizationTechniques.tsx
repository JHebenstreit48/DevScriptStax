import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OptimizationTechniques = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/PerformanceAndTuning/OptimizationTechniques';

  return (
    <>
      <PageLayout>
        <PageTitle title="Optimization Techniques" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OptimizationTechniques;
