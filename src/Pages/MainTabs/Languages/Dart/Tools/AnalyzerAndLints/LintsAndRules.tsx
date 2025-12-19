import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LintsAndRules = () => {
  const markdownFilePath = 'Languages/Dart/Tools/AnalyzerAndLints/LintsAndRules';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="lints & rules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LintsAndRules;
