import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SocialLogins = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Intermediate/ModernMethods/SocialLogins';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Social Logins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SocialLogins;
