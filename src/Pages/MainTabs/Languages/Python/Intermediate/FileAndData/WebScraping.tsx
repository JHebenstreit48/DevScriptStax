import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WebScraping = () => {
  const markdownFilePath = 'Languages/Python/Intermediate/FileAndData/WebScraping';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Web Scraping" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebScraping;
