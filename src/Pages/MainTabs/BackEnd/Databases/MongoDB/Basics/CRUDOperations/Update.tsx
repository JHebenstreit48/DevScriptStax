import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Update = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/CRUD/Update';

  return (
    <>
      <PageLayout>
        <PageTitle title="MongoDB - CRUD Operations - Update" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Update;