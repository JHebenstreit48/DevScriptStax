import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HuskyAndLintStaged = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/Integrations/HuskyAndLintStaged';

  return (
    <>
      <PageLayout>
        <PageTitle title="Husky & Lint-Staged" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HuskyAndLintStaged;
