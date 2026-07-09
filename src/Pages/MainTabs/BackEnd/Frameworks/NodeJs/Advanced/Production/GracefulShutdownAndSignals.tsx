import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GracefulShutdownAndSignals = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/Production/GracefulShutdownAndSignals';

  return (
    <>
      <PageLayout>
        <PageTitle title="Graceful Shutdown & Signals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GracefulShutdownAndSignals;
