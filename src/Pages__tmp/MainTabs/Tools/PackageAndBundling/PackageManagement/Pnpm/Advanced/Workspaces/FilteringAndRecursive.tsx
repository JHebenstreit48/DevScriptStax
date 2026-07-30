import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FilteringAndRecursive = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/Workspaces/FilteringAndRecursive';

  return (
    <>
      <PageLayout>
        <PageTitle title="Filtering & Recursive" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FilteringAndRecursive;
