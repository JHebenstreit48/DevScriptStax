import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HoistingAndConstraints = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/WorkspacesDeepDive/HoistingAndConstraints';

  return (
    <>
      <PageLayout>
        <PageTitle title="Hoisting & Constraints" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HoistingAndConstraints;
