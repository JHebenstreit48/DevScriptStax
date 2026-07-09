import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GuardsAndAssertions = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/TypesAndGuards/GuardsAndAssertions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Guards & Assertions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GuardsAndAssertions;
