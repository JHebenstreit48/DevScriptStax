import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VercelJson = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/BuildsAndConfig/VercelJson';

  return (
    <>
      <PageLayout>
        <PageTitle title="vercel.json" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VercelJson;
