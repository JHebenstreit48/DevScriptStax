import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GrantTypes = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/OAuthOIDC/GrantTypes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Grant Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GrantTypes;
