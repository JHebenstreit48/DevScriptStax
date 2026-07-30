import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LintingStrict = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/BestPractices/ToolingConfig/LintingStrict';

  return (
    <>
      <PageLayout>
        <PageTitle title="Linting/Strict" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LintingStrict;
