import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const KeepAliveAndTimeouts = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Advanced/PerformanceAndTuning/KeepAliveAndTimeouts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Keep-Alive & Timeouts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KeepAliveAndTimeouts;
