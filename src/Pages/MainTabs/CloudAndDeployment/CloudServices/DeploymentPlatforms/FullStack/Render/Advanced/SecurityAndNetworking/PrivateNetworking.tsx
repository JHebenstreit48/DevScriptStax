import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PrivateNetworking = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/SecurityAndNetworking/PrivateNetworking';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Private Networking" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PrivateNetworking;
