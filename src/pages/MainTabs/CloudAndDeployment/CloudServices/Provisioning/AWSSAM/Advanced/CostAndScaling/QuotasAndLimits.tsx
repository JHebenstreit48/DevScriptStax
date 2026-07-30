import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const QuotasAndLimits = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/AWSSAM/Advanced/CostAndScaling/QuotasAndLimits';

  return (
    <>
      <PageLayout>
        <PageTitle title="Quotas & Limits" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QuotasAndLimits;
