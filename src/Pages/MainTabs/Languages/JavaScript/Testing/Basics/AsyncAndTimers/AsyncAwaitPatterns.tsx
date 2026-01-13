import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AsyncAwaitPatterns = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/AsyncAndTimers/AsyncAwaitPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Async/Await Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncAwaitPatterns;
