import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
