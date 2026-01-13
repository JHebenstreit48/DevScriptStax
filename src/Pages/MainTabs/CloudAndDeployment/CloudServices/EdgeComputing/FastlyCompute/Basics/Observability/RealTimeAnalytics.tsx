import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RealTimeAnalytics = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics/Observability/RealTimeAnalytics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Real-Time Analytics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RealTimeAnalytics;
