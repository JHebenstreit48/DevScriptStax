import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OAuthScopes = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Basics/Fundamentals/OAuthScopes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="OAuth Scopes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OAuthScopes;
