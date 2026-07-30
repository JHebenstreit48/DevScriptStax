import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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