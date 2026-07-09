import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FileUploadsPipeline = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/RealtimeAndFiles/FileUploadsPipeline';

  return (
    <>
      <PageLayout>
        <PageTitle title="File Uploads Pipeline" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FileUploadsPipeline;
