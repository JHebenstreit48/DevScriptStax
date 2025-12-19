import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DartAnalyze = () => {
  const markdownFilePath = 'Languages/Dart/Tools/AnalyzerAndLints/DartAnalyze';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="dart analyze" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DartAnalyze;
