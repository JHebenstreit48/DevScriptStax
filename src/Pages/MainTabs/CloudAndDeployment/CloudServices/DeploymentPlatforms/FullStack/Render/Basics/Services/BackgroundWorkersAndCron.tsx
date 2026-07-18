import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BackgroundWorkers = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/WorkersAndCron';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud Services - Deployment - Render - Background Workers & Cron Jobs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackgroundWorkers;