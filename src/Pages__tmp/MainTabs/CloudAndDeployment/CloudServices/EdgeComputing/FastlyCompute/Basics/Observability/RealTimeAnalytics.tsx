import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RealTimeAnalytics = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/FastlyCompute/Basics/Observability/RealTimeAnalytics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Real-Time Analytics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RealTimeAnalytics;
