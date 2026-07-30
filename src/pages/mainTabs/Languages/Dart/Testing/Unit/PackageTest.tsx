import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
