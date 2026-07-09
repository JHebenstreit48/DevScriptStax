import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Turborepo = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/Monorepos/Turborepo';

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
