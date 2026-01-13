import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CPUTimeAndOptimization = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/Performance/CPUTimeAndOptimization';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CPU Time & Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CPUTimeAndOptimization;
