import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TestFilePatterns = () => {
  const markdownFilePath = 'Testing/EndToEnd/Cypress/Basics/ProjectStructure/TestFilePatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Test File Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestFilePatterns;
