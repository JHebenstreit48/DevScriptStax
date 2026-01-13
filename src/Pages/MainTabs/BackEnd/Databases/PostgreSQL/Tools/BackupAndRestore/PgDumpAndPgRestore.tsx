import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PgDumpAndPgRestore = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/BackupAndRestore/PgDumpAndPgRestore';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="pg_dump & pg_restore" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PgDumpAndPgRestore;
