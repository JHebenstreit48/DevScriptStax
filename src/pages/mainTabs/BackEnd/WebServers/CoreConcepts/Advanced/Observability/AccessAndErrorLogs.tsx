import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AccessAndErrorLogs = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/Observability/AccessAndErrorLogs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Access & Error Logs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AccessAndErrorLogs;
