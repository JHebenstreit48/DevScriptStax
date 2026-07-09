import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FilesystemAndHardwareNotes = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/StorageEngineAndInternals/FilesystemAndHardwareNotes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Filesystem & Hardware Notes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FilesystemAndHardwareNotes;
