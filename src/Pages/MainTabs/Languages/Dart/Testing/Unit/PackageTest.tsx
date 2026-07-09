import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PackageTest = () => {
  const markdownFilePath = 'Languages/Dart/Testing/Unit/PackageTest';

  return (
    <>
      <PageLayout>
        <PageTitle title="package:test" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PackageTest;
