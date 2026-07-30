import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VolumesPersistence = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/VolumesAndStorage/VolumesPersistence';

  return (
    <>
      <PageLayout>
        <PageTitle title="Volumes / Persistence" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VolumesPersistence;
