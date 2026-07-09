import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ColdStartsAndPremium = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/Performance/ColdStartsAndPremium';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cold Starts & Premium" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ColdStartsAndPremium;
