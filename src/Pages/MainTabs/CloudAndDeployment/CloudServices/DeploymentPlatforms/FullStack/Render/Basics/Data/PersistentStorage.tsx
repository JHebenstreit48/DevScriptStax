import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PersistentStorage = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Data/PersistentStorage';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Persistent Storage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PersistentStorage;
