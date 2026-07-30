import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomDomains = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Routing/CustomDomains';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Domains" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomDomains;
