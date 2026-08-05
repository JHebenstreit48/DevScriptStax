import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CachingAndPerformanceTuning = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/PerformanceAndScale/CachingAndPerformanceTuning';

  return (
    <>
      <PageLayout>
        <PageTitle title="Caching & Performance Tuning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingAndPerformanceTuning;
