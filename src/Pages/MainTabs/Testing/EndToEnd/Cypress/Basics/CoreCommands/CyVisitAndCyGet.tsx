import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CyVisitAndCyGet = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/CoreCommands/CyVisitAndCyGet';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="cy.visit() & cy.get()" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CyVisitAndCyGet;
