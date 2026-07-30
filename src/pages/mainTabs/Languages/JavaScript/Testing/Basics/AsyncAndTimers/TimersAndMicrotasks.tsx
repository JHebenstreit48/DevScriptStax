import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TimersAndMicrotasks = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/AsyncAndTimers/TimersAndMicrotasks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Timers & Microtasks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TimersAndMicrotasks;
