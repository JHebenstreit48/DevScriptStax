import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PgStatStatements = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW/PgStatStatements';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="pg_stat_statements" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PgStatStatements;
