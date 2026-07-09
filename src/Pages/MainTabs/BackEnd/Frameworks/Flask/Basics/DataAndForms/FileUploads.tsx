import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FileUploads = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Basics/DataAndForms/FileUploads';

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
