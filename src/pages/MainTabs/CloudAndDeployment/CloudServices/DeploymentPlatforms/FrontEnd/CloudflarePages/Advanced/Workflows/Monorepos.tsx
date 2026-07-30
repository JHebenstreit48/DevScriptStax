import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Monorepos = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/Workflows/Monorepos';

  return (
    <>
      <PageLayout>
        <PageTitle title="Monorepos" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Monorepos;
