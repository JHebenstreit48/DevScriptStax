import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
