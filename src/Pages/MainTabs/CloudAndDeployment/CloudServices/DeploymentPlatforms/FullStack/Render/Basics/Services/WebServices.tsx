import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WebServices = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services/WebServices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Web Services" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebServices;
