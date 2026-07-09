import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
