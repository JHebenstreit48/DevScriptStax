import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GitHubActionsAndOtherRunners = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Advanced/CICDIntegration/GitHubActionsAndOtherRunners';

  return (
    <>
      <PageLayout>
        <PageTitle title="GitHub Actions & Other Runners" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GitHubActionsAndOtherRunners;
