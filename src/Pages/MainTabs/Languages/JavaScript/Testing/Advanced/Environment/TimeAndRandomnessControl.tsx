import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TimeAndRandomnessControl = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/Environment/TimeAndRandomnessControl';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Time & Randomness Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TimeAndRandomnessControl;
