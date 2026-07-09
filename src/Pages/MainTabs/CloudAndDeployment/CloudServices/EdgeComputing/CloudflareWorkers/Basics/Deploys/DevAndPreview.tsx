import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DevAndPreview = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Deploys/DevAndPreview';

  return (
    <>
      <PageLayout>
        <PageTitle title="Dev & Preview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DevAndPreview;
