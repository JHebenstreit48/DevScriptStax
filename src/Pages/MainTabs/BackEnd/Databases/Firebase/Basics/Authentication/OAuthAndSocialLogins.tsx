import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
