import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
