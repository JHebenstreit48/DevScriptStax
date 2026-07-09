import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LatencyAndPipelining = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/PerformanceAndMemory/LatencyAndPipelining';

  return (
    <>
      <PageLayout>
        <PageTitle title="Latency & Pipelining" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LatencyAndPipelining;
