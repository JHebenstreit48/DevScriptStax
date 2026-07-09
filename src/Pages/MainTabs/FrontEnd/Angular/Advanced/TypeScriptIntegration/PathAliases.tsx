import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PathAliases = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/TypeScriptIntegration/PathAliases';

  return (
    <>
      <PageLayout>
        <PageTitle title="Path Aliases in Angular" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PathAliases;