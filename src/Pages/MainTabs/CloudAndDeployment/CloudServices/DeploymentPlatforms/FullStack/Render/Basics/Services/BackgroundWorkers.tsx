import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BackgroundWorkers = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/BackgroundWorkers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Background Workers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackgroundWorkers;
