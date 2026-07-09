import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
