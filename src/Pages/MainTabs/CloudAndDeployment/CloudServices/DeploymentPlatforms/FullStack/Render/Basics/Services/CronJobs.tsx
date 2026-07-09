import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
