import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PgStatStatements = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW/PgStatStatements';

  return (
    <>
      <PageLayout>
        <PageTitle title="pg_stat_statements" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PgStatStatements;
