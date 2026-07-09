import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CachePerformance = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Advanced/CachingAndCompression/CachePerformance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cache Performance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachePerformance;
