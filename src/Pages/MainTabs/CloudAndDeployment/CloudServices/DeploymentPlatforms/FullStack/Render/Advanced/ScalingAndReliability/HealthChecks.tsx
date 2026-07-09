import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HealthChecks = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/ScalingAndReliability/HealthChecks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Health Checks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HealthChecks;
