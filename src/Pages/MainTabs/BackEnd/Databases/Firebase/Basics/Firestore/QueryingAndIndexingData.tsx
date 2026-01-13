import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const QueryingAndIndexingData = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Firestore/QueryingAndIndexingData';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Querying & Indexing Data" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QueryingAndIndexingData;
