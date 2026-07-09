import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
