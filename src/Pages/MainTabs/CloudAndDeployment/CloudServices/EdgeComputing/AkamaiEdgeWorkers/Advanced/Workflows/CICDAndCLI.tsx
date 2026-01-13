import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CICDAndCLI = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/Workflows/CICDAndCLI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CI/CD & CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CICDAndCLI;
