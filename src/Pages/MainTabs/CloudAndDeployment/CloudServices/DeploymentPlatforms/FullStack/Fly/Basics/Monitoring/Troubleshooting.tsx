import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Troubleshooting = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics/Monitoring/Troubleshooting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Troubleshooting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Troubleshooting;
