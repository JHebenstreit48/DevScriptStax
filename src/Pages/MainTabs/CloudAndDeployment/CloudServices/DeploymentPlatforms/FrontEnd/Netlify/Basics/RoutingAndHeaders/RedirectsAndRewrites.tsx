import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RedirectsAndRewrites = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/RoutingAndHeaders/RedirectsAndRewrites';

  return (
    <>
      <PageLayout>
        <PageTitle title="Redirects & Rewrites" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RedirectsAndRewrites;
