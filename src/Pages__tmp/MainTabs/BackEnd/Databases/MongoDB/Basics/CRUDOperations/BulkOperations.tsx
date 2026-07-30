import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BulkOperations = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/CRUD/BulkOperations';

  return (
    <>
      <PageLayout>
        <PageTitle title="MongoDB - CRUD Operations - Bulk Operations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BulkOperations;