import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AddRemoveUpdate = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Basics/UsageAndScripts/AddRemoveUpdate';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Add / Remove / Update" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AddRemoveUpdate;
