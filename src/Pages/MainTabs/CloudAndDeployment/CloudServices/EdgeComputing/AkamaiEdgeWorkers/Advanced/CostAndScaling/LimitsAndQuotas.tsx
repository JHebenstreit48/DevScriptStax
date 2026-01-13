import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LimitsAndQuotas = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/CostAndScaling/LimitsAndQuotas';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Limits & Quotas" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LimitsAndQuotas;
