import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VersionsAndActivations = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/FastlyCompute/Basics/Deploys/VersionsAndActivations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Versions & Activations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VersionsAndActivations;
