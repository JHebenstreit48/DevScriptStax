import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SEOAndMetadata = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/SecurityAndSEO/SEOAndMetadata';

  return (
    <>
      <PageLayout>
        <PageTitle title="SEO & Metadata" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SEOAndMetadata;
