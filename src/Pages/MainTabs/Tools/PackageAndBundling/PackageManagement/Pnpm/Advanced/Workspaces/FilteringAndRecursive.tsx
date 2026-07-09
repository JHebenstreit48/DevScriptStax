import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
