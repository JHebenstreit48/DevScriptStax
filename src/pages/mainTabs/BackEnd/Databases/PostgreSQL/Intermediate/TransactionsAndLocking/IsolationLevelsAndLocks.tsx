import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
