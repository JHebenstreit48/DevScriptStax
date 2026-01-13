import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DataGrip = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/GUIClients/DataGrip';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="DataGrip" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataGrip;
