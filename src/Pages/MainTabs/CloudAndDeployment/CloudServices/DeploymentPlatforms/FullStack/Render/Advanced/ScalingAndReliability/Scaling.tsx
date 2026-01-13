import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Scaling = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/ScalingAndReliability/Scaling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Scaling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Scaling;
