import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StatusDiffLog = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Basics/Commands/StatusDiffLog';

  return (
    <>
      <PageLayout>
        <PageTitle title="Git Commands - Status Diff Log" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StatusDiffLog;