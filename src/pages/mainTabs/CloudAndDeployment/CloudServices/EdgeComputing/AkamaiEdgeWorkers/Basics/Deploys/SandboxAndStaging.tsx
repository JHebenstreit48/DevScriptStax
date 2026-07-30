import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SandboxAndStaging = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Deploys/SandboxAndStaging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sandbox & Staging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SandboxAndStaging;
