import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LogsAndAnalytics = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Basics/Monitoring/LogsAndAnalytics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Logs & Analytics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LogsAndAnalytics;
