import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GracefulShutdown = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/Production/GracefulShutdown';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Graceful Shutdown" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GracefulShutdown;
