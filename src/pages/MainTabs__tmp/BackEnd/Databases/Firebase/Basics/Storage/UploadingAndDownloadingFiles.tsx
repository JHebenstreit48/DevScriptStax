import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
