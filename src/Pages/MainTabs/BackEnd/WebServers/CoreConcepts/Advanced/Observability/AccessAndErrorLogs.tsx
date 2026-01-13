import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AccessAndErrorLogs = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/Observability/AccessAndErrorLogs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Access & Error Logs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AccessAndErrorLogs;
