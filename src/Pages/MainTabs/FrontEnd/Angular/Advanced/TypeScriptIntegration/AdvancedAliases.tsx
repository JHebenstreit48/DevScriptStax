import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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