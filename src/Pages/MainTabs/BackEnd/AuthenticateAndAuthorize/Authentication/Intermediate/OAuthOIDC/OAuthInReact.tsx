import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OAuthInReact = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/OAuthOIDC/OAuthInReact';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="OAuth in React" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OAuthInReact;
