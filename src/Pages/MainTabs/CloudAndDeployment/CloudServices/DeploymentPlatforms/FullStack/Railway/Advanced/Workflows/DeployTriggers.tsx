import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeployTriggers = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Workflows/DeployTriggers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Deploy Triggers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeployTriggers;
