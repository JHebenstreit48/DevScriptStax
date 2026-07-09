import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const QueueAndServiceBus = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Triggers/QueueAndServiceBus';

  return (
    <>
      <PageLayout>
        <PageTitle title="Queue & Service Bus" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QueueAndServiceBus;
