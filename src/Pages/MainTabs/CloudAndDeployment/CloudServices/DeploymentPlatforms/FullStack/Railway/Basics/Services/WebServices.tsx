import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
