import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GracefulShutdown = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/Production/GracefulShutdown';

  return (
    <>
      <PageLayout>
        <PageTitle title="Graceful Shutdown" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GracefulShutdown;
