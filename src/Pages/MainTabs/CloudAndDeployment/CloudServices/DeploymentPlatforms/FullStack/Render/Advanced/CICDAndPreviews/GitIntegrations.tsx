import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GitIntegrations = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/CICDAndPreviews/GitIntegrations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Git Integrations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GitIntegrations;
