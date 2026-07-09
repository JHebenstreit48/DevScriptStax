import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EventSources = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/Invocations/EventSources';

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
