import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AccountSetupAndFirstDeployment = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup/AccountAndDeploy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud Services - Deployment - Render -Account Setup & First Deployment" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AccountSetupAndFirstDeployment;