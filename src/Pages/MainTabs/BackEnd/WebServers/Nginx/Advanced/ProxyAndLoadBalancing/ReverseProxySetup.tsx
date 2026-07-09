import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReverseProxySetup = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Advanced/ProxyAndLoadBalancing/ReverseProxySetup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Reverse Proxy Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReverseProxySetup;
