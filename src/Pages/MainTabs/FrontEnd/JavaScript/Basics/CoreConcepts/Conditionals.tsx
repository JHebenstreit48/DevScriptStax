import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Conditionals = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/CoreConcepts/Conditionals';

  return (
    <>
      <PageLayout>
        <Header text="JavaScript Conditionals" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default Conditionals;
