import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FileIO = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/FilesAndStreams/FileIO';

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
