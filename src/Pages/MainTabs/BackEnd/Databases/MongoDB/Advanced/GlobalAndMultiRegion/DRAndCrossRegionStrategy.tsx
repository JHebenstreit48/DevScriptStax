import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DRAndCrossRegionStrategy = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/GlobalAndMultiRegion/DRAndCrossRegionStrategy';

  return (
    <>
      <PageLayout>
        <PageTitle title="DR & Cross-Region Strategy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DRAndCrossRegionStrategy;
