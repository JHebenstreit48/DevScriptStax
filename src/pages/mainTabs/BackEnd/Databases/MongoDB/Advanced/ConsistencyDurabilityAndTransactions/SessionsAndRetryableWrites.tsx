import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SessionsAndRetryableWrites = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ConsistencyDurabilityAndTransactions/SessionsAndRetryableWrites';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sessions & Retryable Writes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SessionsAndRetryableWrites;
