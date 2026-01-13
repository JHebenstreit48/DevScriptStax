import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CachingOverview = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Advanced/CachingAndCompression/CachingOverview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Caching Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingOverview;
