import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SnapshotTests = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/AWSCDK/Advanced/Testing/SnapshotTests';

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
