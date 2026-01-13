import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GzipAndBrotli = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Advanced/CachingAndCompression/GzipAndBrotli';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Gzip & Brotli" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GzipAndBrotli;
