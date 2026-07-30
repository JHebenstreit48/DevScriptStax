import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DirectoryLayoutAndDocRoots = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Basics/SetupAndOps/DirectoryLayoutAndDocRoots';

  return (
    <>
      <PageLayout>
        <PageTitle title="Directory Layout & Doc Roots" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DirectoryLayoutAndDocRoots;
