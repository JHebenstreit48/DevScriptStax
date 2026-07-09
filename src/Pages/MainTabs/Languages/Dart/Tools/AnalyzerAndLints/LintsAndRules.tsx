import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
