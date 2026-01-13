import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const QueueAndServiceBus = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Triggers/QueueAndServiceBus';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Queue & Service Bus" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QueueAndServiceBus;
