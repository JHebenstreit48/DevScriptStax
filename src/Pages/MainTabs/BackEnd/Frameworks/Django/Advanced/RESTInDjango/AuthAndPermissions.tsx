import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AuthAndPermissions = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Advanced/RESTInDjango/AuthAndPermissions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Auth & Permissions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AuthAndPermissions;
