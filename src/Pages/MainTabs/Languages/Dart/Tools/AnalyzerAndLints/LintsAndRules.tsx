import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LintsAndRules = () => {
  const markdownFilePath = 'Languages/Dart/Tools/AnalyzerAndLints/LintsAndRules';

  return (
    <>
      <PageLayout>
        <PageTitle title="lints & rules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LintsAndRules;
