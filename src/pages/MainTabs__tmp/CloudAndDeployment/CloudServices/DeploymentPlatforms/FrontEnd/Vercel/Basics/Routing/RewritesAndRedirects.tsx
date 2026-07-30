import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RewritesAndRedirects = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/Routing/RewritesAndRedirects';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rewrites & Redirects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RewritesAndRedirects;
