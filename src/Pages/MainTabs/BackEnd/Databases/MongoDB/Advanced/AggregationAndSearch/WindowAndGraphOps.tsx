import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WindowAndGraphOps = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/AggregationAndSearch/WindowAndGraphOps';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Window & Graph Ops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WindowAndGraphOps;
