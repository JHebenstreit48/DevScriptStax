import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ESLintPrettier = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/Workflow/ESLintPrettier';

  return (
    <>
      <PageLayout>
        <PageTitle title="ESLint + Prettier" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ESLintPrettier;
