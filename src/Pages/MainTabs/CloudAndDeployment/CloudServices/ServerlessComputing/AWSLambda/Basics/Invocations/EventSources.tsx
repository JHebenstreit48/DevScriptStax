import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EventSources = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AWSLambda/Basics/Invocations/EventSources';

  return (
    <>
      <PageLayout>
        <PageTitle title="Event Sources" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventSources;
