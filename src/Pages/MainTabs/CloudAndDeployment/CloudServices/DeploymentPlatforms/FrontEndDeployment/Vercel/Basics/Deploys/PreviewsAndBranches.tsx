import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PreviewsAndBranches = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/Deploys/PreviewsAndBranches';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Previews & Branches" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PreviewsAndBranches;
