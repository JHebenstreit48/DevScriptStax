import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BackgroundWorkers = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/BackgroundWorkers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Background Workers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackgroundWorkers;
