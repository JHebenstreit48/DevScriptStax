import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SEOBestPractices = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/SEOBestPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="SEO Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SEOBestPractices;
