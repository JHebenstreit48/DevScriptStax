import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FileIO = () => {
  const markdownFilePath = 'Languages/Dart/Testing/Integration/FileIO';

  return (
    <>
      <PageLayout>
        <PageTitle title="File I/O" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FileIO;
