import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
