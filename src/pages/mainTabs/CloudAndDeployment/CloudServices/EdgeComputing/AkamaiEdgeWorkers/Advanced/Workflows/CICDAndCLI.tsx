import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CICDAndCLI = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/Workflows/CICDAndCLI';

  return (
    <>
      <PageLayout>
        <PageTitle title="CI/CD & CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CICDAndCLI;
