import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DartFormat = () => {
  const markdownFilePath = 'Languages/Dart/Tools/CLI/DartFormat';

  return (
    <>
      <PageLayout>
        <PageTitle title="dart format" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DartFormat;
