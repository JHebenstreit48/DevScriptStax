import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RewritesAndRedirects = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/Routing/RewritesAndRedirects';

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
