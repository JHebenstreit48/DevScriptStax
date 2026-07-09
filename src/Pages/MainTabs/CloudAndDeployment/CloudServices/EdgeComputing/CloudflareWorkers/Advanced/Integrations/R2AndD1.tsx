import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
