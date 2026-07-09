import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
