import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RecursiveQueries = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL/RecursiveQueries';

  return (
    <>
      <PageLayout>
        <PageTitle title="Recursive Queries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RecursiveQueries;
