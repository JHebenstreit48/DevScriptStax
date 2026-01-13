import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OptimizationTechniques = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Advanced/PerformanceAndTuning/OptimizationTechniques';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Optimization Techniques" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OptimizationTechniques;
