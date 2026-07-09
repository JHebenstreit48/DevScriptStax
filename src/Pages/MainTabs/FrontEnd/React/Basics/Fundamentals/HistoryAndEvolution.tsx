import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HistoryAndEvolution = () => {
  const markdownFilePath = 'FrontEnd/React/Basics/Fundamentals/HistoryAndEvolution';

  return (
    <>
      <PageLayout>
        <PageTitle title="History & Evolution" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HistoryAndEvolution;
