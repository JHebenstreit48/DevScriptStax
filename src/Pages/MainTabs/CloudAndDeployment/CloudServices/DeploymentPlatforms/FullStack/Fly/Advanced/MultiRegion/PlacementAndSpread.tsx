import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PlacementAndSpread = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/MultiRegion/PlacementAndSpread';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Placement & Spread" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PlacementAndSpread;
