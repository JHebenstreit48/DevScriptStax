import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DBeaver = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/GUIClients/DBeaver';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="DBeaver" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DBeaver;
