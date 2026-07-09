import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WebServices = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Services/WebServices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Web Services" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebServices;
