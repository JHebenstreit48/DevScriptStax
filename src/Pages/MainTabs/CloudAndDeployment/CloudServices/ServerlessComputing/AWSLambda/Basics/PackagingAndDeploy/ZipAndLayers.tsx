import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ZipAndLayers = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics/PackagingAndDeploy/ZipAndLayers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Zip & Layers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ZipAndLayers;
