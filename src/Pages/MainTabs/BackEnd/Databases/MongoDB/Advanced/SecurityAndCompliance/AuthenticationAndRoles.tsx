import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AuthenticationAndRoles = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/SecurityAndCompliance/AuthenticationAndRoles';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Authentication & Roles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AuthenticationAndRoles;
