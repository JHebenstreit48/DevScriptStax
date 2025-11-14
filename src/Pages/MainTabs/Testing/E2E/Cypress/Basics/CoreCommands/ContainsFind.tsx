import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ContainsFind = () => {
  const markdownFilePath =
    'Testing/E2E/Cypress/Commands/ContainsFind';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cypress Core Commands - Contains & Find" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContainsFind;