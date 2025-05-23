import PageLayout from '@components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRender';

const TemplateLiterals = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/DataTypes';

  return (
    <>
      <PageLayout>
        <Header text="Template Literals" size="md" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default TemplateLiterals;
