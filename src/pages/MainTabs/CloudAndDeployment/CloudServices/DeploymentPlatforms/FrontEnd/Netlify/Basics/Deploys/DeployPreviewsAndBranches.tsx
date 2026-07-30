import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DeployPreviewsAndBranches = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Deploys/DeployPreviewsAndBranches';

  return (
    <>
      <PageLayout>
        <PageTitle title="Deploy Previews & Branches" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeployPreviewsAndBranches;
