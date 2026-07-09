import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TablePlus = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/GUIClients/TablePlus';

  return (
    <>
      <PageLayout>
        <PageTitle title="TablePlus" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TablePlus;
