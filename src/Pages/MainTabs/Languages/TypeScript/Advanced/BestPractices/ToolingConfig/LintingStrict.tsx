import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LintingStrict = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/BestPractices/ToolingConfig/LintingStrict';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Linting/Strict" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LintingStrict;
