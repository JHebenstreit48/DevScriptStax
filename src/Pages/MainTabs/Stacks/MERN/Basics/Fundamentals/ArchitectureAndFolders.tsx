import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ArchitectureAndFolders = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/Fundamentals/ArchitectureAndFolders';

  return (
    <>
      <PageLayout>
        <PageTitle title="Architecture & Folders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ArchitectureAndFolders;
