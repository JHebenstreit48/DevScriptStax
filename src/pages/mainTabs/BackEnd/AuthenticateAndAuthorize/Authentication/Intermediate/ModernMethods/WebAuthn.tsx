import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WebAuthn = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/ModernMethods/WebAuthn';

  return (
    <>
      <PageLayout>
        <PageTitle title="WebAuthn" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebAuthn;
