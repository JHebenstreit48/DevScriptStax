import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Debugging = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/Observability/Debugging';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Debugging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Debugging;
