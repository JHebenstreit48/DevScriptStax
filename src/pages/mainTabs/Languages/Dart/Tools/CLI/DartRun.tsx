import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DartRun = () => {
  const markdownFilePath = 'Languages/Dart/Tools/CLI/DartRun';

  return (
    <>
      <PageLayout>
        <PageTitle title="dart run" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DartRun;
