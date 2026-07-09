import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PgAdmin = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Tools/GUIClients/PgAdmin';

  return (
    <>
      <PageLayout>
        <PageTitle title="pgAdmin (Elephant)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PgAdmin;
