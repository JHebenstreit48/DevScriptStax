import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CostControls = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/CostAndScaling/CostControls';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cost Controls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CostControls;
