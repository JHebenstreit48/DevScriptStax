import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LogicalVsPhysicalBackups = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/BackupAndRestore/LogicalVsPhysicalBackups';

  return (
    <>
      <PageLayout>
        <PageTitle title="Logical vs Physical Backups" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LogicalVsPhysicalBackups;
