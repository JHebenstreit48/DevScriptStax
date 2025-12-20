import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HybridRendering = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/PerformanceAndRendering/HybridRendering';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Hybrid Rendering" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HybridRendering;
