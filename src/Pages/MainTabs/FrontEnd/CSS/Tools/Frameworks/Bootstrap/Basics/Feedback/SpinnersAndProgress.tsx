import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
