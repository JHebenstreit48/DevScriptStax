import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const QueryingAndIndexingData = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Firestore/QueryingAndIndex';

  return (
    <>
      <PageLayout>
        <PageTitle title="Querying & Indexing Data" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QueryingAndIndexingData;
