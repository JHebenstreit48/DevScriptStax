import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Semantics = () => {
  const markdownFilePath =
    'FrontEnd/HTMLNotes/HTMLBasics/HTMLSemantics';

  return (
    <>
      <PageLayout>
        <Header text="HTML Semantics" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default Semantics;
