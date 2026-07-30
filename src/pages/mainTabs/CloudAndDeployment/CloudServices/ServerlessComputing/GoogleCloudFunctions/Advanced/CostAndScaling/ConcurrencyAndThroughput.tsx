import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConcurrencyAndThroughput = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/CostAndScaling/ConcurrencyAndThroughput';

  return (
    <>
      <PageLayout>
        <PageTitle title="Concurrency & Throughput" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConcurrencyAndThroughput;
