import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HybridRendering = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/PerformanceAndRendering/HybridRendering';

  return (
    <>
      <PageLayout>
        <PageTitle title="Hybrid Rendering" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HybridRendering;
