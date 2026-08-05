import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
