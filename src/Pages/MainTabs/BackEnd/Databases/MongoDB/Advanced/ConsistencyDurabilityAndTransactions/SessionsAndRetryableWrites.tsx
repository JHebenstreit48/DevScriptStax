import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SessionsAndRetryableWrites = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ConsistencyDurabilityAndTransactions/SessionsAndRetryableWrites';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sessions & Retryable Writes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SessionsAndRetryableWrites;
