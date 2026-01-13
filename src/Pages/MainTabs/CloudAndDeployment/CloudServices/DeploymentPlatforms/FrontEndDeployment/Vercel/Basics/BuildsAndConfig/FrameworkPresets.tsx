import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FrameworkPresets = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Basics/BuildsAndConfig/FrameworkPresets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Framework Presets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FrameworkPresets;
