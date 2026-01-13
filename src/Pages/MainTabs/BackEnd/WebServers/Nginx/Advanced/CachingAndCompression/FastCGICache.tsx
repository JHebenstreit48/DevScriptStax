import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FastCGICache = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Advanced/CachingAndCompression/FastCGICache';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="FastCGI Cache" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FastCGICache;
