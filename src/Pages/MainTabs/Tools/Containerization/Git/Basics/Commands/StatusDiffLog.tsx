import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StatusDiffLog = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Basics/Commands/StatusDiffLog';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Git Commands - Status Diff Log" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StatusDiffLog;