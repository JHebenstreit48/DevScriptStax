import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RollbacksAndLocks = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Deploys/RollbacksAndLocks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rollbacks & Locks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RollbacksAndLocks;
