import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UploadingAndDownloadingFiles = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Storage/UploadingAndDownloadingFiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Uploading & Downloading Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UploadingAndDownloadingFiles;
