import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpinnersAndProgress = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Feedback/SpinnersAndProgress';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Spinners & Progress" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpinnersAndProgress;
