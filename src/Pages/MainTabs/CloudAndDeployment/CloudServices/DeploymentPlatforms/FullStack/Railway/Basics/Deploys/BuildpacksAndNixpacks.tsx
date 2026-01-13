import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildpacksAndNixpacks = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Deploys/BuildpacksAndNixpacks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Buildpacks & Nixpacks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildpacksAndNixpacks;
