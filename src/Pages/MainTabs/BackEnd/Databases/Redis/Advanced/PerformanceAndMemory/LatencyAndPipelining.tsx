import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LatencyAndPipelining = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/PerformanceAndMemory/LatencyAndPipelining';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Latency & Pipelining" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LatencyAndPipelining;
