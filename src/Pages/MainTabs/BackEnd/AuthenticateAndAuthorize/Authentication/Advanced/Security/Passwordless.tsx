import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Passwordless = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security/Passwordless';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Passwordless" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Passwordless;
