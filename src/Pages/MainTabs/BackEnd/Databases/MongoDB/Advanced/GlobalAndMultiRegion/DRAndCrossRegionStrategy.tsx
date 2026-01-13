import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DRAndCrossRegionStrategy = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/GlobalAndMultiRegion/DRAndCrossRegionStrategy';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="DR & Cross-Region Strategy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DRAndCrossRegionStrategy;
