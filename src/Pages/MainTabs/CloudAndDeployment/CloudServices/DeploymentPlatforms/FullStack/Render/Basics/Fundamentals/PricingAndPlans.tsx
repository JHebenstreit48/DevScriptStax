import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PricingAndPlans = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Fundamentals/PricingAndPlans';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Pricing & Plans" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PricingAndPlans;
