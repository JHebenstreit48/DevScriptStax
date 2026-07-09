import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const History = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/Fundamentals/History';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTML Fundamentals - History" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default History;