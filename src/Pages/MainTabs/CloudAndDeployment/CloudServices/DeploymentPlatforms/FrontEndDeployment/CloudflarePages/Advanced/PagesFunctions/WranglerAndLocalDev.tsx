import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WranglerAndLocalDev = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/PagesFunctions/WranglerAndLocalDev';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Wrangler & Local Dev" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WranglerAndLocalDev;
