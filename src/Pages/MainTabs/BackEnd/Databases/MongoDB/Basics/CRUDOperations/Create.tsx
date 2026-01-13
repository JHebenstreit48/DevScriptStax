import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Create = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/CRUDOperations/Create';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Create" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Create;
