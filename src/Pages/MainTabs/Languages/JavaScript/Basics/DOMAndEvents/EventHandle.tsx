import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EventHandling = () => {
  const markdownFilePath = 'FrontEnd/JavaScriptNotes/Basics/DOMAndEvents/EventHandle';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Basics - Event Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventHandling;