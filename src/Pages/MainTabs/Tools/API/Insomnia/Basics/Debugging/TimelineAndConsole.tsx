import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
