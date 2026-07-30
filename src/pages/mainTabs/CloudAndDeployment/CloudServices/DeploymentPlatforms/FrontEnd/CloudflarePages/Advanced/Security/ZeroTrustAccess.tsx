import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ZeroTrustAccess = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/Security/ZeroTrustAccess';

  return (
    <>
      <PageLayout>
        <PageTitle title="Zero Trust Access" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ZeroTrustAccess;
