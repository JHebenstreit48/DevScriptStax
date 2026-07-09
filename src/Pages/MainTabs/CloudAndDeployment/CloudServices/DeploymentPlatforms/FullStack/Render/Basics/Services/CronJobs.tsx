import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CronJobs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/CronJobs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cron Jobs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CronJobs;
