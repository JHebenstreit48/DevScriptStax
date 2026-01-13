import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LaunchApp = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Setup/LaunchApp';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Launch App" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LaunchApp;
