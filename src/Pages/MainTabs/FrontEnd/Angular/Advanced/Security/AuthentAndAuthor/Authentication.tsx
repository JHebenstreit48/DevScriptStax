import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Authentication = () => {
  const markdownFilePath = 'FrontEndNotes/AngularNotes/Advanced/Security/AuthenticationAuthorization/Authentication.md';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Authentication" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Authentication;