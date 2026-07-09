import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Environments = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/ProjectsAndEnv/Environments';

  return (
    <>
      <PageLayout>
        <PageTitle title="Environments" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Environments;
