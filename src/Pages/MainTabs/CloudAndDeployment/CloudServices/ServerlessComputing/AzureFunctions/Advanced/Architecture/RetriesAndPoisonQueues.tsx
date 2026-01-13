import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RetriesAndPoisonQueues = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/Architecture/RetriesAndPoisonQueues';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Retries & Poison Queues" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RetriesAndPoisonQueues;
