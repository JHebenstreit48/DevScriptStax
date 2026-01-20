import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Rollbacks = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Basics/Deploys/Rollbacks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Rollbacks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Rollbacks;
