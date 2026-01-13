import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExternalDatabases = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Data/ExternalDatabases';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="External Databases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExternalDatabases;
