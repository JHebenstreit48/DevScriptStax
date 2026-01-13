import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WebVsAppServers = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Basics/Fundamentals/WebVsAppServers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Web vs App Servers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebVsAppServers;
