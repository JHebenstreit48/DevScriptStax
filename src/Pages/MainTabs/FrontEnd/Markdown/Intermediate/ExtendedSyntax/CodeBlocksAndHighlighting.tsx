import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CodeBlocksAndHighlighting = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Intermediate/ExtendedSyntax/CodeBlocksAndHighlighting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Code Blocks & Highlighting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodeBlocksAndHighlighting;
