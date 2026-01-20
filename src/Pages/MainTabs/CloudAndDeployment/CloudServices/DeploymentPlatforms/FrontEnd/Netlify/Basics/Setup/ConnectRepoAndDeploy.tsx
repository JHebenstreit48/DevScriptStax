import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConnectRepoAndDeploy = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/Setup/ConnectRepoAndDeploy';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Connect Repo & Deploy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConnectRepoAndDeploy;
