import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DebuggingDeploys = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/Monitoring/DebuggingDeploys';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Debugging Deploys" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DebuggingDeploys;
