import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RedirectsAndRewrites = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/RoutingAndHeaders/RedirectsAndRewrites';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Redirects & Rewrites" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RedirectsAndRewrites;
