import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
