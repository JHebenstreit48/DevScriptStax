import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReadingWritingData = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/RealtimeDatabase/ReadingWritingData';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Reading/Writing Data" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReadingWritingData;
