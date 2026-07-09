import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
