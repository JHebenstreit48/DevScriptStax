import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ShardedOpsAndResharding = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/OperationsAtScale/ShardedOpsAndResharding';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sharded Ops & Resharding" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ShardedOpsAndResharding;
