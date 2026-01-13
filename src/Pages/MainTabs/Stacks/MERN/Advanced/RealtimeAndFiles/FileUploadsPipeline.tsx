import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FileUploadsPipeline = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/RealtimeAndFiles/FileUploadsPipeline';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="File Uploads Pipeline" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FileUploadsPipeline;
