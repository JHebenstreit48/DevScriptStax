import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const History = () => {
  const markdownFilePath = 'FrontEndNotes/HTMLNotes/Basics/Fundamentals/History';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="HTML Fundamentals - History" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default History;