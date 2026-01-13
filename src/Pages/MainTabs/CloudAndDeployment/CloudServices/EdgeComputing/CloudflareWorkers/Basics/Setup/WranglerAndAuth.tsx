import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WranglerAndAuth = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Setup/WranglerAndAuth';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Wrangler & Auth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WranglerAndAuth;
