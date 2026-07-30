import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Turborepo = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/Monorepos/Turborepo';

  return (
    <>
      <PageLayout>
        <PageTitle title="Turborepo" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Turborepo;
