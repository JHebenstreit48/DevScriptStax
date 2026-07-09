import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const History = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Fundamentals/History';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript - History" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default History;