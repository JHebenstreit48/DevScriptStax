import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HoistingOptions = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Pnpm/Advanced/NodeModulesLayout/HoistingOptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Hoisting Options" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HoistingOptions;
