import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SnapshotTests = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/Testing/SnapshotTests';

  return (
    <>
      <PageLayout>
        <PageTitle title="Snapshot Tests" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SnapshotTests;
