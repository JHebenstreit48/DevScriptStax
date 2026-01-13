import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EdgeDictionaries = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced/DataAndState/EdgeDictionaries';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Edge Dictionaries (Advanced)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EdgeDictionaries;
