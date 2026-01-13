import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomDomains = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Routing/CustomDomains';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Domains" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomDomains;
