import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LoggingAndMonitoringErrors = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/ErrorHandling/LoggingAndMonitoringErrors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Logging & Monitoring Errors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LoggingAndMonitoringErrors;
