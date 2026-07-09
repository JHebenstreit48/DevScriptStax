import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
