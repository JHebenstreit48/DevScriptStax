import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
