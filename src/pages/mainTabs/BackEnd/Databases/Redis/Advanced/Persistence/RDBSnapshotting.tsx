import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RDBSnapshotting = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/Persistence/RDBSnapshotting';

  return (
    <>
      <PageLayout>
        <PageTitle title="RDB Snapshotting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RDBSnapshotting;
