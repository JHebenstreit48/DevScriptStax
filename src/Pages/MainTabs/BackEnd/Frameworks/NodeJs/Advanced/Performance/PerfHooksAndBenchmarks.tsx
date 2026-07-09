import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
