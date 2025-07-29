import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReactProps = () => {
  const markdownFilePath =
    'FrontEndNotes/ReactNotes/Basics/CoreConcepts/PropsState/Props';

  return (
    <>
      <PageLayout>
        <Header text="Props" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReactProps;
