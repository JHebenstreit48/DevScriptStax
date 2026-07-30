import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const QueueAndServiceBus = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AzureFunctions/Basics/Triggers/QueueAndServiceBus';

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
