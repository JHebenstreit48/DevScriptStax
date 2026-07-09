import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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