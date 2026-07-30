import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
