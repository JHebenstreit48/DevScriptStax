import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FileAndCLI = () => {
  const markdownFilePath = 'Languages/Rust/Basics/IOAndData/FileAndCLI';

  return (
    <>
      <PageLayout>
        <PageTitle title="File & CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FileAndCLI;
