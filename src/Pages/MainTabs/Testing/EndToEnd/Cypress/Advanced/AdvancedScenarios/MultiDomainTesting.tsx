import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MultiDomainTesting = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/AdvancedScenarios/MultiDomainTesting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Multi-Domain Testing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MultiDomainTesting;
