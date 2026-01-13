import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VPCAccess = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/NetworkingAndSecurity/VPCAccess';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="VPC Access" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VPCAccess;
