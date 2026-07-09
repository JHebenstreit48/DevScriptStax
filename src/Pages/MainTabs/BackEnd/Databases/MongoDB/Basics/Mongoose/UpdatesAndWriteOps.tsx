import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UpdatesAndWriteOps = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Basics/Mongoose/Updates';

  return (
    <>
      <PageLayout>
        <PageTitle title="Updates & Write Ops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UpdatesAndWriteOps;
