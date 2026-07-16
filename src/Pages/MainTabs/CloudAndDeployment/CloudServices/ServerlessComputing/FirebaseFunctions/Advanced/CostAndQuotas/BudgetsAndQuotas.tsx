import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BudgetsAndQuotas = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/CostAndQuotas/BudgetsAndQuotas';

  return (
    <>
      <PageLayout>
        <PageTitle title="Budgets & Quotas" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BudgetsAndQuotas;
