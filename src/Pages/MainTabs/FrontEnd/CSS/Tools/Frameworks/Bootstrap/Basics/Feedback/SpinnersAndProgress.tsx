import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpinnersAndProgress = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Feedback/SpinnersAndProgress';

  return (
    <>
      <PageLayout>
        <PageTitle title="Spinners & Progress" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpinnersAndProgress;
