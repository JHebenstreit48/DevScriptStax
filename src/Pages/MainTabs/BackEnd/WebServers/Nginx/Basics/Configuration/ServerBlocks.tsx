import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ServerBlocks = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Basics/Configuration/ServerBlocks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Server Blocks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServerBlocks;
