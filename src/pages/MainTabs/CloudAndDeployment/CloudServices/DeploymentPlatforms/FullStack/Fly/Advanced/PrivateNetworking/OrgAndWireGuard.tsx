import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OrgAndWireGuard = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/PrivateNetworking/OrgAndWireGuard';

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
