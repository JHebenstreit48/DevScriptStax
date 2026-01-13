import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SandboxAndStaging = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Deploys/SandboxAndStaging';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sandbox & Staging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SandboxAndStaging;
