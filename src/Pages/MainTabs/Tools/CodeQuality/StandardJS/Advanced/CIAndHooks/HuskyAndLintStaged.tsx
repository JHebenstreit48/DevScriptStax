import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HuskyAndLintStaged = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Advanced/CIAndHooks/HuskyAndLintStaged';

  return (
    <>
      <PageLayout>
        <PageTitle title="Husky & lint-staged" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HuskyAndLintStaged;
