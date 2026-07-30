import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
