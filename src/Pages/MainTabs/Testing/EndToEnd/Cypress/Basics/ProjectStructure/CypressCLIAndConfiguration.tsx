import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CypressCLIAndConfiguration = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/ProjectStructure/CypressCLIAndConfiguration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cypress CLI & Configuration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CypressCLIAndConfiguration;
