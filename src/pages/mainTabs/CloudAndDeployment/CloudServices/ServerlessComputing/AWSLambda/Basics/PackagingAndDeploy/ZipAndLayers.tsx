import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ZipAndLayers = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AWSLambda/Basics/PackagingAndDeploy/ZipAndLayers';

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
