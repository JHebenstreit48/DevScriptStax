import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TestHooks = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Intermediate/OrganizingTests/TestHooks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Test Hooks (before, after, each)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestHooks;
