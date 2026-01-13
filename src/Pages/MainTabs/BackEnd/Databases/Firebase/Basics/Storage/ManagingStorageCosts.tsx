import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ManagingStorageCosts = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Storage/ManagingStorageCosts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Managing Storage Costs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ManagingStorageCosts;
