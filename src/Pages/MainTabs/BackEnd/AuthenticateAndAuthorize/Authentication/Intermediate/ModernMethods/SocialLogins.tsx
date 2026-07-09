import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SocialLogins = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/ModernMethods/SocialLogins';

  return (
    <>
      <PageLayout>
        <PageTitle title="Social Logins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SocialLogins;
