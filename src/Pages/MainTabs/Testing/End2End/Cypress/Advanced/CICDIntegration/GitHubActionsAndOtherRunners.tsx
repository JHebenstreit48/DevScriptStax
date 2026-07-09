import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
