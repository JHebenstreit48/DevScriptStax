import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AtlasSearchIntegration = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/AggregationAndSearch/AtlasSearchIntegration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Atlas Search Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AtlasSearchIntegration;
