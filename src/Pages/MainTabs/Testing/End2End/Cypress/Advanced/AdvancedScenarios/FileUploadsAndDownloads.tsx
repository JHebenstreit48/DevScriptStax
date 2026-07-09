import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FileUploadsAndDownloads = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/AdvancedScenarios/FileUploadsAndDownloads';

  return (
    <>
      <PageLayout>
        <PageTitle title="File Uploads & Downloads" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FileUploadsAndDownloads;
