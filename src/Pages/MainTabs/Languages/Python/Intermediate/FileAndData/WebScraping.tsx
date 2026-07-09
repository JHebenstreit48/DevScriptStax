import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WebScraping = () => {
  const markdownFilePath = 'Languages/Python/Intermediate/FileAndData/WebScraping';

  return (
    <>
      <PageLayout>
        <PageTitle title="Web Scraping" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebScraping;
