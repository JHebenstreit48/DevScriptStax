import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Delete = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/CRUD/Delete';

  return (
    <>
      <PageLayout>
        <PageTitle title="MongoDB - CRUD Operations - Delete" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Delete;