import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RenderYaml = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/Blueprints/RenderYaml';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="render.yaml" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RenderYaml;
