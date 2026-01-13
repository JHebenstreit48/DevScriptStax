import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DockerAndNixpacks = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Deploys/DockerAndNixpacks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Docker & Nixpacks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DockerAndNixpacks;
