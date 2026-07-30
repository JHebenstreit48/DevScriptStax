import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ZonesAndTagAwareSharding = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/GlobalAndMultiRegion/ZonesAndTagAwareSharding';

  return (
    <>
      <PageLayout>
        <PageTitle title="Zones & Tag-Aware Sharding" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ZonesAndTagAwareSharding;
