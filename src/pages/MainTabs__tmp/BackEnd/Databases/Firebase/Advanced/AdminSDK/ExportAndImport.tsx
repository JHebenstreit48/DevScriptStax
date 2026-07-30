import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ExportAndImport = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/AdminSDK/ExportAndImport';

  return (
    <>
      <PageLayout>
        <PageTitle title="Export & Import" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExportAndImport;
