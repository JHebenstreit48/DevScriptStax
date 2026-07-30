import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BodiesAndFiles = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Basics/Requests/BodiesAndFiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Bodies & Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BodiesAndFiles;
