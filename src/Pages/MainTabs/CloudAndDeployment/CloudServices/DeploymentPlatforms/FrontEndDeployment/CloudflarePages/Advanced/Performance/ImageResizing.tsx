import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ImageResizing = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/Performance/ImageResizing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Image Resizing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImageResizing;
