import PageLayout from '@components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const TemplateLiterals = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/DataTypes';

  return (
    <>
      <PageLayout>
        <Header text="Template Literals" size="md" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default TemplateLiterals;
