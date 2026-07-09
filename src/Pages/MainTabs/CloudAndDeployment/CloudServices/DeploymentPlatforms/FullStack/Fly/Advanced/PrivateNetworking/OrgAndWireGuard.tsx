import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OrgAndWireGuard = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/PrivateNetworking/OrgAndWireGuard';

  return (
    <>
      <PageLayout>
        <PageTitle title="Org & WireGuard" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OrgAndWireGuard;
