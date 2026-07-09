import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LimitsAndQuotas = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/CostAndScaling/LimitsAndQuotas';

  return (
    <>
      <PageLayout>
        <PageTitle title="Limits & Quotas" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LimitsAndQuotas;
