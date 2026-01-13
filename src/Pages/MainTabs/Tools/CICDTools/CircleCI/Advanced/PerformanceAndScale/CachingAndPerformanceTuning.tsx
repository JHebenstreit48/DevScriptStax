import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CachingAndPerformanceTuning = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/PerformanceAndScale/CachingAndPerformanceTuning';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Caching & Performance Tuning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingAndPerformanceTuning;
