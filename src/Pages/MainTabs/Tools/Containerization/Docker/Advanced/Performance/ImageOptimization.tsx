import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ImageOptimization = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/Performance/ImageOptimization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Image Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImageOptimization;
