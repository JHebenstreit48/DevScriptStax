import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BackupAndSync = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Portability/BackupAndSync';

  return (
    <>
      <PageLayout>
        <PageTitle title="Backup & Sync" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackupAndSync;
