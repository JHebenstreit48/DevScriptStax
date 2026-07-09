import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
