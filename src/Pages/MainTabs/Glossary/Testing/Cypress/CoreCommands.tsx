import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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