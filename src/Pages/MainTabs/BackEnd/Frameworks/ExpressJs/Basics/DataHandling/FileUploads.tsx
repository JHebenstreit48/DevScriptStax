import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FileUploads = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJS/Basics/DataHandling/FileUploads';

  return (
    <>
      <PageLayout>
        <PageTitle title="File Uploads" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FileUploads;
