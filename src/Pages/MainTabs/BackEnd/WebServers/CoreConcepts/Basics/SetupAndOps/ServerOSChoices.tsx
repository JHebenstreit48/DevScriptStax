import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ServerOSChoices = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Basics/SetupAndOps/ServerOSChoices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Server OS Choices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServerOSChoices;
