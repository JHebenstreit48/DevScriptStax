import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RetriesAndPoisonQueues = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AzureFunctions/Advanced/Architecture/RetriesAndPoisonQueues';

  return (
    <>
      <PageLayout>
        <PageTitle title="Retries & Poison Queues" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RetriesAndPoisonQueues;
