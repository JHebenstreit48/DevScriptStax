import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FileUploads = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/Forms/FileUploads';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="File Uploads" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FileUploads;
