import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecretsAndEnvVars = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/StorageAndEnv/SecretsAndEnvVars';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Secrets & Env Vars (Fly)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecretsAndEnvVars;
