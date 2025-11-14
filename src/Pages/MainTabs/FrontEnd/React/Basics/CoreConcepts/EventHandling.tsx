import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';
import PageTitle from '@/Components/PageComponents/PageTitle';

const EventHandling = () => {
  const markdownFilePath =
    'FrontEnd/React/Basics/CoreConcepts/EventHandling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Core Concepts - Event Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EventHandling;