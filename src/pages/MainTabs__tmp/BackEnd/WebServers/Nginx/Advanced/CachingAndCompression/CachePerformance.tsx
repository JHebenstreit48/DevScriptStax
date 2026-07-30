import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
