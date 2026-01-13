import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PKCE = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/OAuthOIDC/PKCE';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="PKCE" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PKCE;
