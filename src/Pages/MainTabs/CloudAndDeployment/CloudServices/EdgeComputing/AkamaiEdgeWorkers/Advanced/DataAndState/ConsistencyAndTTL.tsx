import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConsistencyAndTTL = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Advanced/DataAndState/ConsistencyAndTTL';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Consistency & TTL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConsistencyAndTTL;
