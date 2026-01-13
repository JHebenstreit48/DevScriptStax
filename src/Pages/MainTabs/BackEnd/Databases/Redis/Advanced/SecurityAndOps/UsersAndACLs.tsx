import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UsersAndACLs = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/SecurityAndOps/UsersAndACLs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Users & ACLs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UsersAndACLs;
