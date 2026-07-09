import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AddRemoveUpdate = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/UsageAndScripts/AddRemoveUpdate';

  return (
    <>
      <PageLayout>
        <PageTitle title="Add / Remove / Update" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AddRemoveUpdate;
