import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const QueryPlansAndEXPLAIN = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Intermediate/IndexesAndPerformance/QueryPlansAndEXPLAIN';

  return (
    <>
      <PageLayout>
        <PageTitle title="Query Plans & EXPLAIN" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QueryPlansAndEXPLAIN;
