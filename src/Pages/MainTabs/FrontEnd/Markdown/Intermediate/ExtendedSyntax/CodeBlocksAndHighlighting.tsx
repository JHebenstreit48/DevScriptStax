import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CodeBlocksAndHighlighting = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Intermediate/ExtendedSyntax/CodeBlocksAndHighlighting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Code Blocks & Highlighting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodeBlocksAndHighlighting;
