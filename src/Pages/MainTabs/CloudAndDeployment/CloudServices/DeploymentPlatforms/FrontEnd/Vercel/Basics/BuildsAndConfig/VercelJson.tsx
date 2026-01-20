import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VercelJson = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/BuildsAndConfig/VercelJson';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="vercel.json" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VercelJson;
