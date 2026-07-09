import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
