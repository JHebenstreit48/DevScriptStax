import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CronJobs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/CronJobs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cron Jobs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CronJobs;
