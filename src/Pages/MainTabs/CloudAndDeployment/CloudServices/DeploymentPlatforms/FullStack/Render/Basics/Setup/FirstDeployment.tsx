import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FirstDeployment = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup/FirstDeployment';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="First Deployment" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FirstDeployment;
