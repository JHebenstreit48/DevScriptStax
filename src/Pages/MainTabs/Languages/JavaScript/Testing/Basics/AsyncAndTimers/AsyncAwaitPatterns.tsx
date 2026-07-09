import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AsyncAwaitPatterns = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/AsyncAndTimers/AsyncAwaitPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Async/Await Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncAwaitPatterns;
