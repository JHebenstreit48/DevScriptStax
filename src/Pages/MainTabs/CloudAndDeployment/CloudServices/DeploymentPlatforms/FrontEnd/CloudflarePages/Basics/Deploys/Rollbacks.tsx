import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Rollbacks = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Basics/Deploys/Rollbacks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rollbacks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Rollbacks;
