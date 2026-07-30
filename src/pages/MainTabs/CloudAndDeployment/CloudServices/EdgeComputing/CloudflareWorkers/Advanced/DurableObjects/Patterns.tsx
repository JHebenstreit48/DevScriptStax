import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Patterns = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/DurableObjects/Patterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Patterns;
