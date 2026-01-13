import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BlueGreenDeploys = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/Workflows/BlueGreenDeploys';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Blue-Green Deploys" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BlueGreenDeploys;
