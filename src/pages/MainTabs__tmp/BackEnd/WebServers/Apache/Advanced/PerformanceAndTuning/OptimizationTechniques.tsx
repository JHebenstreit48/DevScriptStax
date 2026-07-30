import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
