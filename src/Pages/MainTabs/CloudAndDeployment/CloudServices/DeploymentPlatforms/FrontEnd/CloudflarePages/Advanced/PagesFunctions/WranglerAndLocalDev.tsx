import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WranglerAndLocalDev = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/PagesFunctions/WranglerAndLocalDev';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wrangler & Local Dev" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WranglerAndLocalDev;
