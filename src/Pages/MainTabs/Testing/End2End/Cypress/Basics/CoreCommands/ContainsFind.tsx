import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ContainsFind = () => {
  const markdownFilePath =
    'Testing/E2E/Cypress/Commands/ContainsFind';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cypress Core Commands - Contains & Find" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContainsFind;