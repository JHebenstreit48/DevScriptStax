import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeduplicateAndOverrides = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/PerfAndDedup/DeduplicateAndOverrides';

  return (
    <>
      <PageLayout>
        <PageTitle title="Deduplicate & Overrides" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeduplicateAndOverrides;
