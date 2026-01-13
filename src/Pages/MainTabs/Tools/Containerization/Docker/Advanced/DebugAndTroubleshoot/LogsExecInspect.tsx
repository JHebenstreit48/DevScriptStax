import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LogsExecInspect = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/DebugAndTroubleshoot/LogsExecInspect';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Logs / Exec / Inspect" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LogsExecInspect;
