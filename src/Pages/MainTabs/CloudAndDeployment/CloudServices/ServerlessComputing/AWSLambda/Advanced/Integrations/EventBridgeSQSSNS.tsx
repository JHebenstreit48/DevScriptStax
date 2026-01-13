import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EventBridgeSQSSNS = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/Integrations/EventBridgeSQSSNS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="EventBridge / SQS / SNS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventBridgeSQSSNS;
