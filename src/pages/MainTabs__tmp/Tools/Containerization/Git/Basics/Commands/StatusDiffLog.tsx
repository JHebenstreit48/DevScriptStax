import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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