import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EventBridgeSQSSNS = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/Integrations/EventBridgeSQSSNS';

  return (
    <>
      <PageLayout>
        <PageTitle title="EventBridge / SQS / SNS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventBridgeSQSSNS;
