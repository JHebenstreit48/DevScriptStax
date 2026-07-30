import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
