import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildLogsAndReplay = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/DebugAndTroubleshoot/BuildLogsAndReplay';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build Logs & Replay" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildLogsAndReplay;
