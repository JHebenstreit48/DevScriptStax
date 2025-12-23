import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BatchingAndSubscriptions = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/Performance/BatchingAndSubscriptions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Batching & Subscriptions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BatchingAndSubscriptions;
