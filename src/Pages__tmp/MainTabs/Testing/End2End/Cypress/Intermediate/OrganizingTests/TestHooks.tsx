import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
