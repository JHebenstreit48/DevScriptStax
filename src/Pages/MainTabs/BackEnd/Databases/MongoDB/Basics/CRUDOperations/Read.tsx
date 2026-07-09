import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Read = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/CRUD/Read';

  return (
    <>
      <PageLayout>
        <PageTitle title="MongoDB - CRUD Operations - Read" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Read;
