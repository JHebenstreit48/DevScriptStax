import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OIDC = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/OAuthOIDC/OIDC';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="OIDC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OIDC;
