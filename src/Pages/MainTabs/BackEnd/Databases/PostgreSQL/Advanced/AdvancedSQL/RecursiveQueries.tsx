import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RecursiveQueries = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL/RecursiveQueries';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Recursive Queries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RecursiveQueries;
