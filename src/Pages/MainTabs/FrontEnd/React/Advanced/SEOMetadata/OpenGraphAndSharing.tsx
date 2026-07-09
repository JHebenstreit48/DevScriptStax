import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
