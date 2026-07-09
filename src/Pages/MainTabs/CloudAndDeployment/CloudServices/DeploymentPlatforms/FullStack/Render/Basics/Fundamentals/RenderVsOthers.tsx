import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RenderVsOthers = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Fundamentals/RenderVsOthers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Render vs Others" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RenderVsOthers;
