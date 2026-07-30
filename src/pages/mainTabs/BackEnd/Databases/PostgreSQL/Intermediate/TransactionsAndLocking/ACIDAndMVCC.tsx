import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ACIDAndMVCC = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Intermediate/TransactionsAndLocking/ACIDAndMVCC';

  return (
    <>
      <PageLayout>
        <PageTitle title="ACID & MVCC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ACIDAndMVCC;
