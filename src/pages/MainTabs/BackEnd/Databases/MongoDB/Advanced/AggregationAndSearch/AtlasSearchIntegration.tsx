import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AtlasSearchIntegration = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/AggregationAndSearch/AtlasSearchIntegration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Atlas Search Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AtlasSearchIntegration;
