import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
