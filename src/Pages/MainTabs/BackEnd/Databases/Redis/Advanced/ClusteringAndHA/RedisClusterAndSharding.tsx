import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RedisClusterAndSharding = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/ClusteringAndHA/RedisClusterAndSharding';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Redis Cluster & Sharding" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RedisClusterAndSharding;
