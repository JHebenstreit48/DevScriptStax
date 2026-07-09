import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UsersAndACLs = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/SecurityAndOps/UsersAndACLs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Users & ACLs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UsersAndACLs;
