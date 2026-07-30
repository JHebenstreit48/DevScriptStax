import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
