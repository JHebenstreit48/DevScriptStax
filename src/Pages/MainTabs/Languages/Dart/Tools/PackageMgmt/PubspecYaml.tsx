import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PubspecYaml = () => {
  const markdownFilePath = 'Languages/Dart/Tools/PackageMgmt/PubspecYaml';

  return (
    <>
      <PageLayout>
        <PageTitle title="pubspec.yaml" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PubspecYaml;
