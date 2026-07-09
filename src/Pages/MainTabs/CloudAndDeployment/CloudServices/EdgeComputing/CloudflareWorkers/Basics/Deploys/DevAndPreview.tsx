import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
