import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Backups = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/AdvancedTopics/Backups';

  return (
    <>
      <PageLayout>
        <PageTitle title="Backups" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Backups;
