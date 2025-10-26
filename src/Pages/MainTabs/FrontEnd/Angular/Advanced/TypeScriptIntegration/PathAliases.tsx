import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PathAliases = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/TypeScriptIntegration/PathAliases';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Path Aliases in Angular" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PathAliases;