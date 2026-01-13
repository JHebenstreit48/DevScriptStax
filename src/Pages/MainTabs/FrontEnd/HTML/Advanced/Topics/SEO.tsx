import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SEOBestPractices = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/SEOBestPractices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SEO Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SEOBestPractices;
