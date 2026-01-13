import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FilesystemAndHardwareNotes = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/StorageEngineAndInternals/FilesystemAndHardwareNotes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Filesystem & Hardware Notes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FilesystemAndHardwareNotes;
