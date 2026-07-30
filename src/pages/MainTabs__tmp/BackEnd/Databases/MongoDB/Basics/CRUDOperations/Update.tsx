import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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