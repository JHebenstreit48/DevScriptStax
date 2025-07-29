import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReactState = () => {
  const markdownFilePath =
    'FrontEndNotes/ReactNotes/Basics/CoreConcepts/PropsState/State';

  return (
    <>
      <PageLayout>
        <Header text="State" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReactState;
