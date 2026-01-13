import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const QueryPlansAndEXPLAIN = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Intermediate/IndexesAndPerformance/QueryPlansAndEXPLAIN';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Query Plans & EXPLAIN" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QueryPlansAndEXPLAIN;
