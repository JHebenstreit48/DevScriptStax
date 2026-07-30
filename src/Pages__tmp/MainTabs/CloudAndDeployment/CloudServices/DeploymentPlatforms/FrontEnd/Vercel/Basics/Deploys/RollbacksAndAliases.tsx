import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RollbacksAndAliases = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/Deploys/RollbacksAndAliases';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rollbacks & Aliases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RollbacksAndAliases;
