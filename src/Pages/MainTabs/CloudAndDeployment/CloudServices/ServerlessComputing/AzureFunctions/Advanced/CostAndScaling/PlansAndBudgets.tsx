import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PlansAndBudgets = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/CostAndScaling/PlansAndBudgets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Plans & Budgets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PlansAndBudgets;
