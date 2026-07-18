import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VPCAccess = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AWSLambda/Advanced/NetworkingAndSecurity/VPCAccess';

  return (
    <>
      <PageLayout>
        <PageTitle title="VPC Access" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VPCAccess;
