import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IsolationLevelsAndLocks = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Intermediate/TransactionsAndLocking/IsolationLevelsAndLocks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Isolation Levels & Locks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IsolationLevelsAndLocks;
