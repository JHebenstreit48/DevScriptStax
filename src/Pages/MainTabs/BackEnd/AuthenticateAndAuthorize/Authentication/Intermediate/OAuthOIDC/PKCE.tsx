import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PKCE = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/OAuthOIDC/PKCE';

  return (
    <>
      <PageLayout>
        <PageTitle title="PKCE" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PKCE;
