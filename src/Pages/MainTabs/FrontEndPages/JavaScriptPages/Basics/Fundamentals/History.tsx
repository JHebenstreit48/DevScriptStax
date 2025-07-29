import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const History = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/Fundamentals/History';

  return (
    <>
      <PageLayout>
        <Header text="History" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default History;
