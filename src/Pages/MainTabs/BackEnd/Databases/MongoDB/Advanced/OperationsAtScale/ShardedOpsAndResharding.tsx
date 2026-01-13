import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ShardedOpsAndResharding = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/OperationsAtScale/ShardedOpsAndResharding';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sharded Ops & Resharding" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ShardedOpsAndResharding;
