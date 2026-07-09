import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EventHandling = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/DOMAndEvents/EventHandle';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Basics - Event Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventHandling;