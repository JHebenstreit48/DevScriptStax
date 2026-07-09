import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BatchingAndSubscriptions = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/Performance/BatchingAndSubscriptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Batching & Subscriptions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BatchingAndSubscriptions;
