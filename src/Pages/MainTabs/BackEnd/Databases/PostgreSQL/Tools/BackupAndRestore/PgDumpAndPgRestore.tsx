import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
