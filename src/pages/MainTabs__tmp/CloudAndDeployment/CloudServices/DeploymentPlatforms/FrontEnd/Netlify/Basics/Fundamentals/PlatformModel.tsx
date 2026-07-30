import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PlatformModel = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Fundamentals/PlatformModel';

  return (
    <>
      <PageLayout>
        <PageTitle title="Platform Model" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PlatformModel;
