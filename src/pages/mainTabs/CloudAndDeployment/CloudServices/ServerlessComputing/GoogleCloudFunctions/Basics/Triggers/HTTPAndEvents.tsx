import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HTTPAndEvents = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Triggers/HTTPAndEvents';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTTP & Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPAndEvents;
