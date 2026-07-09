import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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