import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
