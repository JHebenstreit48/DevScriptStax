import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HealthChecks = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Scaling/HealthChecks';

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
