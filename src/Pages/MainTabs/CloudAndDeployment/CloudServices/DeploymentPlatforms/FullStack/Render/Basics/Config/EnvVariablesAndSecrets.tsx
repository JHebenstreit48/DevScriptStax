import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnvVariablesAndSecrets = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Config/EnvVariablesAndSecrets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Env Variables & Secrets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvVariablesAndSecrets;
