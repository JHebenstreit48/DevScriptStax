import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BudgetsProfiling = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Performance/BudgetsProfiling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Budgets Profiling in Angular" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BudgetsProfiling;