import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OIDC = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/OAuthOIDC/OIDC';

  return (
    <>
      <PageLayout>
        <PageTitle title="OIDC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OIDC;
