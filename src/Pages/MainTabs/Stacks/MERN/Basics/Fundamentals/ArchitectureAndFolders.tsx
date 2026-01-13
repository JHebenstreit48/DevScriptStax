import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ArchitectureAndFolders = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/Fundamentals/ArchitectureAndFolders';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Architecture & Folders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ArchitectureAndFolders;
