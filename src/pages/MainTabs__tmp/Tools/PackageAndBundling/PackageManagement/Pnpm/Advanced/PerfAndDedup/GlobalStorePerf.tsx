import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GlobalStorePerf = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/PerfAndDedup/GlobalStorePerf';

  return (
    <>
      <PageLayout>
        <PageTitle title="Global Store Perf" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GlobalStorePerf;
