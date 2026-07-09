import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
