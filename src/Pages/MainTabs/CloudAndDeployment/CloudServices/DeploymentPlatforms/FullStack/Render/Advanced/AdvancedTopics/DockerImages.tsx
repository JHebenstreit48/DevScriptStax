import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DockerImages = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/AdvancedTopics/DockerImages';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Docker Images" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DockerImages;
