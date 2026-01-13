import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TracingAndLogs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Observability/TracingAndLogs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tracing & Logs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TracingAndLogs;
