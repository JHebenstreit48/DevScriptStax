import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ESLintPrettier = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/Workflow/ESLintPrettier';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ESLint + Prettier" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ESLintPrettier;
