import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DockerAndNixpacks = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Deploys/DockerAndNixpacks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Docker & Nixpacks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DockerAndNixpacks;
