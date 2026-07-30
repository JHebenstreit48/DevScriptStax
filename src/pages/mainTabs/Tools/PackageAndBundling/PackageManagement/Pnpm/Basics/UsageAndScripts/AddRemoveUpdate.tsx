import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
