import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TestPyramidAndScope = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/Fundamentals/TestPyramidAndScope';

  return (
    <>
      <PageLayout>
        <PageTitle title="Test Pyramid & Scope" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestPyramidAndScope;
