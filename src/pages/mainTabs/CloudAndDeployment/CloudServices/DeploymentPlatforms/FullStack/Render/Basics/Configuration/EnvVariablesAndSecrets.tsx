import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EnvVariablesAndSecrets = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Configuration/EnvVariables';

  return (
    <>
      <PageLayout>
        <PageTitle title="Env Variables & Secrets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvVariablesAndSecrets;
