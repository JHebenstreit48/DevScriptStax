import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MPMsAndConcurrency = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/PerformanceAndTuning/MPMsAndConcurrency';

  return (
    <>
      <PageLayout>
        <PageTitle title="MPMs & Concurrency" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MPMsAndConcurrency;
