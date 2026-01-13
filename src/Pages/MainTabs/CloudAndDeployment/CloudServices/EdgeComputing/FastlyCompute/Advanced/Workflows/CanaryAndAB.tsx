import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CanaryAndAB = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/Workflows/CanaryAndAB';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Canary & A/B" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CanaryAndAB;
