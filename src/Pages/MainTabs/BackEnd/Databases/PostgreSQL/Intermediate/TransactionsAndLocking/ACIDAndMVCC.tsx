import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ACIDAndMVCC = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Intermediate/TransactionsAndLocking/ACIDAndMVCC';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ACID & MVCC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ACIDAndMVCC;
