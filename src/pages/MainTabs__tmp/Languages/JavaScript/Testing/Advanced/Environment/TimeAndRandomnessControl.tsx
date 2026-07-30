import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TimeAndRandomnessControl = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/Environment/TimeAndRandomnessControl';

  return (
    <>
      <PageLayout>
        <PageTitle title="Time & Randomness Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TimeAndRandomnessControl;
