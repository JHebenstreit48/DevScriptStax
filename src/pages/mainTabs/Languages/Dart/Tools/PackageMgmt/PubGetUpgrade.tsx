import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
