import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
