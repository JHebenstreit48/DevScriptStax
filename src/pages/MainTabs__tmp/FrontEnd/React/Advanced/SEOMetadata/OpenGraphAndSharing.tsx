import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OpenGraphAndSharing = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/SEOMetadata/OpenGraphAndSharing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Open Graph & Sharing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OpenGraphAndSharing;
