import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TablePlus = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/GUIClients/TablePlus';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TablePlus" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TablePlus;
