import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BackupsAndPITR = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/OperationsAtScale/BackupsAndPITR';

  return (
    <>
      <PageLayout>
        <PageTitle title="Backups & PITR" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackupsAndPITR;
