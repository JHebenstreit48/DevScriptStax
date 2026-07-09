import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LoggingAndMonitoringErrors = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/ErrorHandling/LoggingAndMonitoringErrors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Logging & Monitoring Errors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LoggingAndMonitoringErrors;
