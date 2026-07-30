import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StorageAndBandwidth = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/CostOptimization/StorageAndBandwidth';

  return (
    <>
      <PageLayout>
        <PageTitle title="Storage & Bandwidth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StorageAndBandwidth;
