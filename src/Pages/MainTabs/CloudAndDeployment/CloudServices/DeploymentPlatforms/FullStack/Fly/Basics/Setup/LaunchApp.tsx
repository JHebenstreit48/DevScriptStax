import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LaunchApp = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Setup/LaunchApp';

  return (
    <>
      <PageLayout>
        <PageTitle title="Launch App" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LaunchApp;
