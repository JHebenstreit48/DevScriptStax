import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WindowAndGraphOps = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/AggregationAndSearch/WindowAndGraphOps';

  return (
    <>
      <PageLayout>
        <PageTitle title="Window & Graph Ops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WindowAndGraphOps;
