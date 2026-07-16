import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ImageCDNAndOptimization = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Advanced/PerformanceAndCaching/ImageCDNAndOptimization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Image CDN & Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImageCDNAndOptimization;
