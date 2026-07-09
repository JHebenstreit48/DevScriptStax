import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
