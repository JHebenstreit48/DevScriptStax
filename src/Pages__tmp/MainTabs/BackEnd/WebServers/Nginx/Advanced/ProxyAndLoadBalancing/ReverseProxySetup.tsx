import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
