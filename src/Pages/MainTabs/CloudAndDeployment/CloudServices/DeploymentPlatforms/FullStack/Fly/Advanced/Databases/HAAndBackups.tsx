import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HAAndBackups = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/Databases/HAAndBackups';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="HA & Backups" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HAAndBackups;
