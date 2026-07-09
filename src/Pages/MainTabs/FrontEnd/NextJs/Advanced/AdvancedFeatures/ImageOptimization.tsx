import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ImageOptimization = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Advanced/AdvancedFeatures/ImageOptimization';

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
