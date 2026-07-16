import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SSLTLSAndHTTPS = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/SecurityAndNetworking/SSLTLSAndHTTPS';

  return (
    <>
      <PageLayout>
        <PageTitle title="SSL/TLS & HTTPS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSLTLSAndHTTPS;
