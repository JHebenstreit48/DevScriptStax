import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FileHandling = () => {
  const markdownFilePath = 'Languages/Python/Intermediate/FileAndData/FileHandling';

  return (
    <>
      <PageLayout>
        <PageTitle title="File Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FileHandling;
