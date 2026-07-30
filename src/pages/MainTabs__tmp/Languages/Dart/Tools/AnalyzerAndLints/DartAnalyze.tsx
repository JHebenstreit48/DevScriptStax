import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DartAnalyze = () => {
  const markdownFilePath = 'Languages/Dart/Tools/AnalyzerAndLints/DartAnalyze';

  return (
    <>
      <PageLayout>
        <PageTitle title="dart analyze" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DartAnalyze;
