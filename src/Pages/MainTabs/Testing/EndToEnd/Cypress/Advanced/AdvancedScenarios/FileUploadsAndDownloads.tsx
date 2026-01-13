import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FileUploadsAndDownloads = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/AdvancedScenarios/FileUploadsAndDownloads';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="File Uploads & Downloads" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FileUploadsAndDownloads;
