import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
