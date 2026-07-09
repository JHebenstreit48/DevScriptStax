import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
