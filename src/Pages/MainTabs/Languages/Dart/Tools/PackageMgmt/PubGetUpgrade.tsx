import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PubGetUpgrade = () => {
  const markdownFilePath = 'Languages/Dart/Tools/PackageMgmt/PubGetUpgrade';

  return (
    <>
      <PageLayout>
        <PageTitle title="pub get/upgrade" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PubGetUpgrade;
