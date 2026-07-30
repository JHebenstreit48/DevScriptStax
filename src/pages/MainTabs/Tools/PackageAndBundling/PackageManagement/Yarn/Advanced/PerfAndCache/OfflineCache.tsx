import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OfflineCache = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/PerfAndCache/OfflineCache';

  return (
    <>
      <PageLayout>
        <PageTitle title="Offline Cache" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OfflineCache;
