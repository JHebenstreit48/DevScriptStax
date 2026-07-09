import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IncrementalStaticRegeneration = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Advanced/AdvancedFeatures/IncrementalStaticRegeneration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Incremental Static Regeneration (ISR)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IncrementalStaticRegeneration;
