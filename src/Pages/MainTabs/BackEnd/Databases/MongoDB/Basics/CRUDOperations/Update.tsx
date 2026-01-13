import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Update = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/CRUDOperations/Update';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Update" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Update;
