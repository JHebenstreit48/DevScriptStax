import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VPCConnector = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/NetworkingAndSecurity/VPCConnector';

  return (
    <>
      <PageLayout>
        <PageTitle title="VPC Connector" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VPCConnector;
