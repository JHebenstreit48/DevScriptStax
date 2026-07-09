import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Passwordless = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security/Passwordless';

  return (
    <>
      <PageLayout>
        <PageTitle title="Passwordless" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Passwordless;
