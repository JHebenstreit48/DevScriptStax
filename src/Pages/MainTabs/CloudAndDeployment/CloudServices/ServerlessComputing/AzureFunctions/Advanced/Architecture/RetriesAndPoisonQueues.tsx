import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RetriesAndPoisonQueues = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/Architecture/RetriesAndPoisonQueues';

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
