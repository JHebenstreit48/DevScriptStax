import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
