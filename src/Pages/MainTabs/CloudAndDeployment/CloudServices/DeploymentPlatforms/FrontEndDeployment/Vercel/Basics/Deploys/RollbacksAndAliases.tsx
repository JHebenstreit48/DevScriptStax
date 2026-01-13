import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RollbacksAndAliases = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/Deploys/RollbacksAndAliases';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Rollbacks & Aliases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RollbacksAndAliases;
