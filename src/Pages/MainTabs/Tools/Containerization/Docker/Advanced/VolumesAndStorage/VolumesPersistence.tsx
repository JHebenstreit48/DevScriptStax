import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
