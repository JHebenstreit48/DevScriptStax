import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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