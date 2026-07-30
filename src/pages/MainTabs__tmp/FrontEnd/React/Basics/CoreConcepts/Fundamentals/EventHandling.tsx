import PageLayout from '@/components/navigationUI/pageLayout';
import Notes from '@/components/pageComponents/notes/notes';
import PageTitle from '@/components/pageComponents/pageTitle';

const EventHandling = () => {
  const markdownFilePath =
    'FrontEnd/React/Basics/CoreConcepts/Fundamentals/EventHandling';

  return (
    <>
      <PageLayout>
        <PageTitle title="React Core Concepts - Event Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventHandling;