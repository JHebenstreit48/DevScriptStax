import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const EventHandling = () => {
  const markdownFilePath =
    'FrontEndNotes/ReactNotes/Basics/CoreConcepts/EventHandling';

  return (
    <>
      <PageLayout>
        <Header text="Event Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventHandling;
