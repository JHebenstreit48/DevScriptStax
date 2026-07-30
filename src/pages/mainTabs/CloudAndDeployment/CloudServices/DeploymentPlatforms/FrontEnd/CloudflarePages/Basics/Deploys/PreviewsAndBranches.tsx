import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PreviewsAndBranches = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Basics/Deploys/PreviewsAndBranches';

  return (
    <>
      <PageLayout>
        <PageTitle title="Previews & Branches" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PreviewsAndBranches;
