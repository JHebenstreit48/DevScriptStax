import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LogsExecInspect = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/DebugAndTroubleshoot/LogsExecInspect';

  return (
    <>
      <PageLayout>
        <PageTitle title="Logs / Exec / Inspect" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LogsExecInspect;
