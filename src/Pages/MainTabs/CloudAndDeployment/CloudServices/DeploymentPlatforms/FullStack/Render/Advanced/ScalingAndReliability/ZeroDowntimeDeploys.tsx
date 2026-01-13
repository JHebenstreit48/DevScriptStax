import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ZeroDowntimeDeploys = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/ScalingAndReliability/ZeroDowntimeDeploys';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Zero-Downtime Deploys" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ZeroDowntimeDeploys;
