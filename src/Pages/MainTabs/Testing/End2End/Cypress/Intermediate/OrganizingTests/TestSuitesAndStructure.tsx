import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TestSuitesAndStructure = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/OrganizingTests/TestSuitesAndStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Test Suites & Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestSuitesAndStructure;
