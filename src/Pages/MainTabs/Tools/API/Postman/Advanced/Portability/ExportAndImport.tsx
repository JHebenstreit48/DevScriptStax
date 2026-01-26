import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExportAndImport = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Portability/ExportAndImport';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Export & Import" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExportAndImport;
