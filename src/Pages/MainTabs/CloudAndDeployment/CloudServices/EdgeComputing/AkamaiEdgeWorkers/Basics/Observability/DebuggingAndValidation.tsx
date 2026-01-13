import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DebuggingAndValidation = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Observability/DebuggingAndValidation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Debugging & Validation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DebuggingAndValidation;
