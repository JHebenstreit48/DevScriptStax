import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CredentialStuffing = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security/CredentialStuffing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Credential Stuffing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CredentialStuffing;
