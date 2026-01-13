import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProvisionedDBs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Services/ProvisionedDBs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Provisioned DBs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProvisionedDBs;
