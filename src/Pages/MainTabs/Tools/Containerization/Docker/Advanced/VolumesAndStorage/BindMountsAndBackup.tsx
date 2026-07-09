import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BindMountsAndBackup = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/VolumesAndStorage/BindMountsAndBackup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Bind Mounts & Backup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BindMountsAndBackup;
