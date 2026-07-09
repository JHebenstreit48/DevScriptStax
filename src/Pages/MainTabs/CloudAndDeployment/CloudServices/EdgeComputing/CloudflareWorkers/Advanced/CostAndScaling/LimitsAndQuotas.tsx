import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LimitsAndQuotas = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/CostAndScaling/LimitsAndQuotas';

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
