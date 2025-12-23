import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IncrementalStaticRegeneration = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Advanced/AdvancedFeatures/IncrementalStaticRegeneration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Incremental Static Regeneration (ISR)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IncrementalStaticRegeneration;
