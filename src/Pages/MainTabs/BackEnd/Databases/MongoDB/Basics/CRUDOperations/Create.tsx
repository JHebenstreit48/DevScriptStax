import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Create = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/CRUD/Create';

  return (
    <>
      <PageLayout>
        <PageTitle title="MongoDB - CRUD Operations - Create" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Create;