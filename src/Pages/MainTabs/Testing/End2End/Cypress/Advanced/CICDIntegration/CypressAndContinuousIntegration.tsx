import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CypressAndContinuousIntegration = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/CICDIntegration/CypressAndContinuousIntegration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cypress & Continuous Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CypressAndContinuousIntegration;
