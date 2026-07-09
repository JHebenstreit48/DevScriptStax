import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CISetup = () => {
  const markdownFilePath = 'Languages/Dart/Testing/QualityAndCI/CISetup';

  return (
    <>
      <PageLayout>
        <PageTitle title="CI Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CISetup;
