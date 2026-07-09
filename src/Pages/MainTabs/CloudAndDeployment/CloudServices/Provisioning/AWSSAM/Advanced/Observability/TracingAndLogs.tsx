import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TracingAndLogs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Observability/TracingAndLogs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tracing & Logs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TracingAndLogs;
