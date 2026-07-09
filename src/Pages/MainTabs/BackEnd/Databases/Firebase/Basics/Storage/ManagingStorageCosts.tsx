import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ManagingStorageCosts = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Storage/ManagingStorageCosts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Managing Storage Costs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ManagingStorageCosts;
