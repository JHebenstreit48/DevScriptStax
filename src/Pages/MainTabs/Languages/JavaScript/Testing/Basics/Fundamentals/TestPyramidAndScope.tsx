import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TestPyramidAndScope = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/Fundamentals/TestPyramidAndScope';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Test Pyramid & Scope" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestPyramidAndScope;
