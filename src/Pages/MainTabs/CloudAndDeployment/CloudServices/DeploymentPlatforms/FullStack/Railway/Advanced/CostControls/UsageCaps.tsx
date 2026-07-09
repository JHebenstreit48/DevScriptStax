import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UsageCaps = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced/CostControls/UsageCaps';

  return (
    <>
      <PageLayout>
        <PageTitle title="Usage Caps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UsageCaps;
