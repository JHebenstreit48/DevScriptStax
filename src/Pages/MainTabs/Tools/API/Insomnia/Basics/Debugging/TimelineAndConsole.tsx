import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TimelineAndConsole = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Basics/Debugging/TimelineAndConsole';

  return (
    <>
      <PageLayout>
        <PageTitle title="Timeline & Console" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TimelineAndConsole;
