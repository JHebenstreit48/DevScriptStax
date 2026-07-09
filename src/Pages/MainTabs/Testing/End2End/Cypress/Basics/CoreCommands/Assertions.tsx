import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Assertions = () => {
  const markdownFilePath =
    'Testing/E2E/Cypress/Commands/AssertionsOverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cypress Core Commands - Assertions Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Assertions;