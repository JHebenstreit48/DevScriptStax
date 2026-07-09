import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RenderYaml = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/Blueprints/RenderYaml';

  return (
    <>
      <PageLayout>
        <PageTitle title="render.yaml" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RenderYaml;
