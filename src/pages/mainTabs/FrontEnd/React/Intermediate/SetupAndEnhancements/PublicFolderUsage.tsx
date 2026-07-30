import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
