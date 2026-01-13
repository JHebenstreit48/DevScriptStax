import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HuskyAndLintStaged = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/Integrations/HuskyAndLintStaged';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Husky & Lint-Staged" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HuskyAndLintStaged;
