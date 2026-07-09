import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
