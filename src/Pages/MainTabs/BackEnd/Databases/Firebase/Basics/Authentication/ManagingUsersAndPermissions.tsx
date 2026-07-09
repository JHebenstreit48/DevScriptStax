import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ManagingUsersAndPermissions = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Authentication/ManagingUsersAndPermissions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Managing Users & Permissions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ManagingUsersAndPermissions;
