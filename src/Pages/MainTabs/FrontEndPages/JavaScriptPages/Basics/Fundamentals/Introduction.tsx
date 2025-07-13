import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/Fundamentals/Introduction';

  return (
    <>
      <PageLayout>
        <Header text="Introduction" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default Introduction;