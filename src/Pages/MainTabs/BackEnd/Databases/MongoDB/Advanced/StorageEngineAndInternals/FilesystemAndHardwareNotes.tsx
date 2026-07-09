import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
