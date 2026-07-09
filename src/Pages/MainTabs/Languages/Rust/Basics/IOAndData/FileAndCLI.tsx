import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
