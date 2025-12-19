import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DartRun = () => {
  const markdownFilePath = 'Languages/Dart/Tools/CLI/DartRun';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="dart run" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DartRun;
