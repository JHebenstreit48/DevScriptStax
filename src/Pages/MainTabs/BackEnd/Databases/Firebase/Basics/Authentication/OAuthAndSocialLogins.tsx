import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OAuthAndSocialLogins = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Authentication/OAuthAndSocialLogins';

  return (
    <>
      <PageLayout>
        <PageTitle title="OAuth & Social Logins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OAuthAndSocialLogins;
