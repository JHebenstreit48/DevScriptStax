import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PagesIntegration = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/Integrations/PagesIntegration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pages Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PagesIntegration;
