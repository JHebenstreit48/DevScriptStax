import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ZonesAndTagAwareSharding = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/GlobalAndMultiRegion/ZonesAndTagAwareSharding';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Zones & Tag-Aware Sharding" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ZonesAndTagAwareSharding;
