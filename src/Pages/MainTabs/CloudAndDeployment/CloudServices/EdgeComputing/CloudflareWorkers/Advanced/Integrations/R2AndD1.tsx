import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const R2AndD1 = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/Integrations/R2AndD1';

  return (
    <>
      <PageLayout>
        <PageTitle title="R2 & D1" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default R2AndD1;
