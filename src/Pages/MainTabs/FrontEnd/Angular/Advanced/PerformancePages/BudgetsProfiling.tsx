import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";


const BudgetsProfiling = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/Advanced/PerformanceNotes/BudgetsProfiling";

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Budgets Profiling in Angular" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BudgetsProfiling;