import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
