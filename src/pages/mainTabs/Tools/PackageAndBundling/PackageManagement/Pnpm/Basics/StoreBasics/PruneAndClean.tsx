import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PruneAndClean = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/StoreBasics/PruneAndClean';

  return (
    <>
      <PageLayout>
        <PageTitle title="Prune & Clean" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PruneAndClean;
