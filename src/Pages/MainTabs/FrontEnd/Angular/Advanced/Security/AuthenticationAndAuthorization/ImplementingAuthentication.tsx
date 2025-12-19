import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ImplementingAuthentication = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Security/AuthenticationAndAuthorization/ImplementingAuthentication';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Implementing Authentication" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImplementingAuthentication;
