import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PruneAndClean = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/StoreBasics/PruneAndClean';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Prune & Clean" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PruneAndClean;
