import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Volumes = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/Persistence/Volumes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Volumes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Volumes;
