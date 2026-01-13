import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StorageAndBandwidth = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/CostOptimization/StorageAndBandwidth';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Storage & Bandwidth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StorageAndBandwidth;
