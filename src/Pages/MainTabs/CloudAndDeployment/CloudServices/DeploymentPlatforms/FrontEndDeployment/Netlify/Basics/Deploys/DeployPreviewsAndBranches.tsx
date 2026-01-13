import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeployPreviewsAndBranches = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Basics/Deploys/DeployPreviewsAndBranches';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Deploy Previews & Branches" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeployPreviewsAndBranches;
