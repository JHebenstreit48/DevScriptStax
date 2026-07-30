import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AdvancedAliases = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/TypeScriptIntegration/AdvancedAliases';

  return (
    <>
      <PageLayout>
        <PageTitle title="Advanced Aliases in Angular" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AdvancedAliases;