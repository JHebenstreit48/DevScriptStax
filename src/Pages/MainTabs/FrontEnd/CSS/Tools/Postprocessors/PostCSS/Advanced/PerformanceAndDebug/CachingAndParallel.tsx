import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CachingAndParallel = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PerformanceAndDebug/CachingAndParallel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Caching & Parallel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingAndParallel;
