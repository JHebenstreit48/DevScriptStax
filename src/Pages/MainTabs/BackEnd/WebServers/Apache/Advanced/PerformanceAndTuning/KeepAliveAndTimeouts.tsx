import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const KeepAliveAndTimeouts = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/PerformanceAndTuning/KeepAliveAndTimeouts';

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
