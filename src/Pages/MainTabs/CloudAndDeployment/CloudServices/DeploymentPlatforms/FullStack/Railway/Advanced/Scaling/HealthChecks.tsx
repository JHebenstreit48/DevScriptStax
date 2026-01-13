import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HealthChecks = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Scaling/HealthChecks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Health Checks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HealthChecks;
