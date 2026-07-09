import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ServerBlocks = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Basics/Configuration/ServerBlocks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Server Blocks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServerBlocks;
