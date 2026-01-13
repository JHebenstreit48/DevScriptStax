import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IsolationLevelsAndLocks = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Intermediate/TransactionsAndLocking/IsolationLevelsAndLocks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Isolation Levels & Locks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IsolationLevelsAndLocks;
