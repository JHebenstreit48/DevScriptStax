import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CyContainsAndCyFind = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/CoreCommands/CyContainsAndCyFind';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="cy.contains() & cy.find()" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CyContainsAndCyFind;
