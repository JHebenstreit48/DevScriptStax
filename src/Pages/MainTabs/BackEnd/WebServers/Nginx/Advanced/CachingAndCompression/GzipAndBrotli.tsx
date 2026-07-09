import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GzipAndBrotli = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Advanced/CachingAndCompression/GzipAndBrotli';

  return (
    <>
      <PageLayout>
        <PageTitle title="Gzip & Brotli" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GzipAndBrotli;
