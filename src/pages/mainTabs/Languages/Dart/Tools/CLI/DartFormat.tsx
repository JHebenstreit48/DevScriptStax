import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
