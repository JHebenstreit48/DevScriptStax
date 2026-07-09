import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DurableObjects = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/DataAndBindings/DurableObjects';

  return (
    <>
      <PageLayout>
        <PageTitle title="Durable Objects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DurableObjects;
