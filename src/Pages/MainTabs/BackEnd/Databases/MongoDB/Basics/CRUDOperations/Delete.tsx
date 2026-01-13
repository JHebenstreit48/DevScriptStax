import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Delete = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/CRUDOperations/Delete';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Delete" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Delete;
