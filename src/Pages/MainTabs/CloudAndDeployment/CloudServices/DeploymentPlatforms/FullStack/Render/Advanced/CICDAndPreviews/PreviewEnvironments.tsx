import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PreviewEnvironments = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/CICDAndPreviews/PreviewEnvironments';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Preview Environments" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PreviewEnvironments;
