import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CypressTestStructure = () => {
  const markdownFilePath = 'Glossary/Testing/Cypress/TestStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cypress - Test Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CypressTestStructure;