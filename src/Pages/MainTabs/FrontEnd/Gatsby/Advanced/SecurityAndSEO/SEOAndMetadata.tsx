import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SEOAndMetadata = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/SecurityAndSEO/SEOAndMetadata';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SEO & Metadata" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SEOAndMetadata;
