import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OfflineCache = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/PerfAndCache/OfflineCache';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Offline Cache" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OfflineCache;
