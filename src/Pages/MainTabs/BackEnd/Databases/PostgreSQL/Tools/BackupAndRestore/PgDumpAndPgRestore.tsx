import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PgDumpAndPgRestore = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/BackupAndRestore/PgDumpAndPgRestore';

  return (
    <>
      <PageLayout>
        <PageTitle title="pg_dump & pg_restore" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PgDumpAndPgRestore;
