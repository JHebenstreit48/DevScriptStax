import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeployHooks = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/Workflows/DeployHooks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Deploy Hooks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeployHooks;
