import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
