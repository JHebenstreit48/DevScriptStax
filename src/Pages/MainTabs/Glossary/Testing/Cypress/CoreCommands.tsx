import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CypressCoreCommands = () => {
  const markdownFilePath = 'Glossary/Testing/Cypress/CoreCommands';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cypress - Core Commands" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CypressCoreCommands;