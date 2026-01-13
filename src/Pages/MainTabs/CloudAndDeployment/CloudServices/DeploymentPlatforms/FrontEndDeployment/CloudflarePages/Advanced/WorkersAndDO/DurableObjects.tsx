import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DurableObjects = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/WorkersAndDO/DurableObjects';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Durable Objects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DurableObjects;
