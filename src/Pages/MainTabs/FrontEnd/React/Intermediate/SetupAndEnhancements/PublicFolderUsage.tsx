import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PublicFolderUsage = () => {
  const markdownFilePath = 'FrontEnd/React/Intermediate/SetupAndEnhancements/PublicFolderUsage';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Public Folder Usage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PublicFolderUsage;
