import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProfilingAndOptimizing = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/InteropAndPerf/ProfilingAndOptimizing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Profiling & Optimizing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilingAndOptimizing;
