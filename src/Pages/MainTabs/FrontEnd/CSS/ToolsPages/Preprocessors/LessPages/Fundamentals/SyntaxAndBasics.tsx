import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SyntaxAndBasics = () => {
  const markdownFilePath = 'FrontEndNotes/CSSNotes/ToolsNotes/Preprocessors/Less/Fundamentals/SyntaxAndBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Less Fundamentals - Syntax & Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyntaxAndBasics;