import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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