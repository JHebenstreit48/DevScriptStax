import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BundlesAndActivation = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Deploys/BundlesAndActivation';

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
