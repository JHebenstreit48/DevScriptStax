import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const QueriesAndFilters = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Mongoose/Queries';

  return (
    <>
      <PageLayout>
        <PageTitle title="Queries & Filters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QueriesAndFilters;