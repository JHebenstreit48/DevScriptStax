import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GrantTypes = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/OAuthOIDC/GrantTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Grant Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GrantTypes;
