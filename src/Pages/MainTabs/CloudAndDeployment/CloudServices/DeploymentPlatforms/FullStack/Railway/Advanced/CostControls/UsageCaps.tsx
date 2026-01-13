import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UsageCaps = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/CostControls/UsageCaps';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Usage Caps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UsageCaps;
