import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ServiceMesh = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/PrivateNetworking/ServiceMesh';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Service Mesh" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServiceMesh;
