import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BulkOperations = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/CRUDOperations/BulkOperations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Bulk Operations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BulkOperations;
