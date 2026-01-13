import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LogsAndMetrics = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Observability/LogsAndMetrics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Logs & Metrics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LogsAndMetrics;
