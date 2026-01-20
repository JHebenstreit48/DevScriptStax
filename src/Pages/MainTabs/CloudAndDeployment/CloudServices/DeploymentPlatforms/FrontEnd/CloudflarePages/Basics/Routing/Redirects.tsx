import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Redirects = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Basics/Routing/Redirects';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Redirects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Redirects;
