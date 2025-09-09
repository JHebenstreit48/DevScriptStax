import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const SyntaxStructure = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/CoreConcepts/SyntaxStructure';

  return (
    <>
      <PageLayout>
        <Header text="Syntax" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default SyntaxStructure;
