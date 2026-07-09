import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DockerImages = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/AdvancedTopics/DockerImages';

  return (
    <>
      <PageLayout>
        <PageTitle title="Docker Images" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DockerImages;
