import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HealthChecks = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/ScalingAndReliability/HealthChecks';

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
