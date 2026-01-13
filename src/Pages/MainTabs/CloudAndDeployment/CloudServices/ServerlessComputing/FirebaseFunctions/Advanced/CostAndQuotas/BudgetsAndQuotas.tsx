import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BudgetsAndQuotas = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/CostAndQuotas/BudgetsAndQuotas';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Budgets & Quotas" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BudgetsAndQuotas;
