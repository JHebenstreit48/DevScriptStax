import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PricingAndLimits = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/FirebaseFunctions/Basics/Fundamentals/PricingAndLimits';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pricing & Limits" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PricingAndLimits;
