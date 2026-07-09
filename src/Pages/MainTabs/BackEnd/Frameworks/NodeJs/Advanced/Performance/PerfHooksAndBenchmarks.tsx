import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PerfHooksAndBenchmarks = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/Performance/PerfHooksAndBenchmarks';

  return (
    <>
      <PageLayout>
        <PageTitle title="perf_hooks & Benchmarks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerfHooksAndBenchmarks;
