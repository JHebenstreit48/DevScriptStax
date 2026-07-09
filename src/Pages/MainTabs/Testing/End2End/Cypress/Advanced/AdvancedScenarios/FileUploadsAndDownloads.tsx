import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
