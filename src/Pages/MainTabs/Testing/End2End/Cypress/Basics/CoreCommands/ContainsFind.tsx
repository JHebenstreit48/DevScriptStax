import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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