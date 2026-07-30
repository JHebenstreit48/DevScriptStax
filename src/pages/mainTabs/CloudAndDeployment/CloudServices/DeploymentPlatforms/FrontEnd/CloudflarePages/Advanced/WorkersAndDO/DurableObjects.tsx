import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DurableObjects = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/WorkersAndDO/DurableObjects';

  return (
    <>
      <PageLayout>
        <PageTitle title="Durable Objects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DurableObjects;
