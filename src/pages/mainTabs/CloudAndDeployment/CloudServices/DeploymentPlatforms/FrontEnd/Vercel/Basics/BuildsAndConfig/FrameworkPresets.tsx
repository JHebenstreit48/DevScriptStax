import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FrameworkPresets = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/BuildsAndConfig/FrameworkPresets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Framework Presets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FrameworkPresets;
