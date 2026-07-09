import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WebSockets = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Advanced/ProxyAndLoadBalancing/WebSockets';

  return (
    <>
      <PageLayout>
        <PageTitle title="WebSockets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebSockets;
