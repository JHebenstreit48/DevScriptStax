import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RoleBasedAccessControl = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Security/AuthenticationAndAuthorization/RoleBasedAccessControl';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Role-Based Access Control (RBAC)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RoleBasedAccessControl;
