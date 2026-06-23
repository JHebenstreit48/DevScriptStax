import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CypressTestStructure = () => {
  const markdownFilePath = 'Glossary/Testing/Cypress/TestStructure';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cypress - Test Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CypressTestStructure;