import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BundlesAndActivation = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Deploys/BundlesAndActivation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Bundles & Activation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BundlesAndActivation;
