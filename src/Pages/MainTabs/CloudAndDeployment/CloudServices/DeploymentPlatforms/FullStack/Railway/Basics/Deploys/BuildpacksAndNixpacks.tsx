import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuildpacksAndNixpacks = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Deploys/BuildpacksAndNixpacks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Buildpacks & Nixpacks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildpacksAndNixpacks;
