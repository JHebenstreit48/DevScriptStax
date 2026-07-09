import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PublicFolderUsage = () => {
  const markdownFilePath = 'FrontEnd/React/Intermediate/SetupAndEnhancements/PublicFolderUsage';

  return (
    <>
      <PageLayout>
        <PageTitle title="Public Folder Usage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PublicFolderUsage;
